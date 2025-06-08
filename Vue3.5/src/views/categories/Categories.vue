<template>
  <div class="hover-wrapper">
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout class="myBlockFlex" row wrap>
        <app-card customClasses="mb-20" colClasses="xl12 lg12 md12 sm12 xs12">
          <v-card-title>
            <v-chip> Country:</v-chip>
            <div class="float-right">
              <country-provider></country-provider>
            </div>
          </v-card-title>
          <v-treeview
            v-model="tree"
            v-model:opened="open"
            v-model:activated="active"
            :items="categories"
            item-value="id"
            activatable
            
            v-bind:style="rowStyle"
            @update:activated="view"
            return-object
            item-children="childs"
          >
            <template v-slot:prepend="{ item, isOpen }">
              <v-icon v-if="!item.file" :icon="isOpen ? 'mdi-folder-open' : 'mdi-folder'"></v-icon>
              <v-icon v-else :icon="files[item.file]"></v-icon>
              {{ item.name }}
            </template>
            <template v-slot:append="{ item }">
              {{ item.ads_count }}
              <v-btn
                :disabled="!item.has_childs"
                color="primary"
                size="x-small"
                class="ml-2"
                @click.stop="sort(item.childs)"
              >
                Sort
              </v-btn>
            </template>
          </v-treeview>

          <!-- Categories Sort Dialog -->
          <v-dialog v-model="sortDialog" max-width="700px" @click:outside="this.closeSortDialog">
            <category-sort-table :close="closeSortDialog"></category-sort-table>
          </v-dialog>

          <!-- User Profile Dialog -->
          <v-dialog v-model="dialog" max-width="700px" @click:outside="this.close">
            <v-card>
              <v-card-title> Category </v-card-title>
              <v-card-text>
                <v-container fluid grid-list-xl pt-0>
                  <v-layout row wrap>
                    <v-col xs12 md12 lg12 sm12 class="col-height-auto">
                      <div>
                        <v-card :loading="loading" height="2px" flat></v-card>
                        <category :is-new="isNew" :close="close" ref="category"></category>
                      </div>
                    </v-col>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-row justify="space-between" class="mb-4 pr-2 pl-2">
                  <v-btn class="bg-warning" color="white" @click.stop="close">Close</v-btn>
                  <div>
                    <v-btn
                      v-if="!isNew"
                      :right="true"
                      color="white"
                      @click.stop="duplicateCategory"
                      class="mr-2 bg-info"
                      :disabled="!$can(CREATE, RESOURCE)"
                    >
                      Duplicate
                    </v-btn>
                    <v-btn
                      v-if="!isNew"
                      :right="true"
                      color="white"
                      class="bg-error"
                      @click.stop="openConfirmationDialog"
                      :disabled="!$can(DELETE, RESOURCE)"
                    >
                      <v-icon small icon="md:delete" />
                      Delete
                    </v-btn>
                  </div>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn
            class="mt-70"
            @click="newCategory"
            color="primary"
            :disabled="!$can(CREATE, RESOURCE)"
          >
            + {{ $t('message.addNewCategory') }}
          </v-btn>
          <v-btn class="ml-2 mt-70" @click="sort(null)" color="primary"> Sort </v-btn>
          <v-btn
            class="float-right mt-70"
            @click="cloneDialog = true"
            color="error"
            :disabled="!$is_super"
          >
            <i class="zmdi zmdi-alert-triangle mr-2"></i>Clone
          </v-btn>
        </app-card>
      </v-layout>
    </v-container>
    <!-- Delete Confirmation Dialog -->
    <v-dialog
      v-model="confirmationDialog"
      max-width="700px"
      @click-outside="closeConfirmationDialog"
    >
      <v-card>
        <v-card-title>
          <p>Are you sure you want to delete this category?</p>
          <v-alert class="text-break" border="left" type="error"
            ><b class="text-uppercase">Warning:</b> Deleting category will result in deleting all of
            the ads and sub-categories within it. Note this action is
            <b class="text-uppercase">irreversible</b>
          </v-alert>
        </v-card-title>
        <v-card-actions>
          <v-btn color="error" @click.stop="deleteCategory" :loading="loading" :disabled="loading">
            Delete
          </v-btn>
          <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--  Clone Dialog  -->
    <v-dialog
      v-model="cloneDialog"
      max-width="700px"
      @click:outside="closeCloneDialog"
      @close="closeCloneDialog"
    >
      <clone-dialog :close="closeCloneDialog"></clone-dialog>
    </v-dialog>
  </div>
</template>

<script>
import Category from './Category'
import CountryProvider from '../../components/Header/CountryProvider'
import Permissions from '../../store/modules/admin/permissions'
import CloneDialog from './CloneDialog'
import CategorySortTable from './SortTable'

export default {
  components: {
    CloneDialog,
    Category,
    CountryProvider,
    CategorySortTable,
  },

  data: () => ({
    /**
     * Permissions Constants
     */
    VIEW: Permissions.actions.view,
    CREATE: Permissions.actions.create,
    UPDATE: Permissions.actions.update,
    DELETE: Permissions.actions.delete,
    RESOURCE: Permissions.resources.category,

    active: [],
    open: [],
    tree: [],
    loading: false,
    rowStyle: {
      cursor: 'pointer',
    },
    dialog: false,
    sortDialog: false,
    isNew: false,
    confirmationDialog: false,
    cloneDialog: false,
  }),
  computed: {
    categories() {
      return this.$store.getters.categories
    },

    selectedCategory() {
      return this.$store.getters.selectedCategory
    },
  },

  mounted() {
    this.$store.dispatch('getCategoriesTree')
  },

  watch: {},

  methods: {
    view(category) {
      this.loading = true
      this.dialog = true
      this.active = []
      this.$store.dispatch('fetchSelectedCategory', category[0]).finally(() => {
        this.loading = false
      })
    },

    newCategory() {
      this.isNew = true
      let newCategory = {
        name: '',
        name_ar: '',
        image: '',
        parent_id: '',
        src: '',
      }
      this.$store.commit('updateSelectedCategory', { category: newCategory })
      this.dialog = true
    },

    close() {
      this.dialog = false
      this.isNew = false
      this.$refs.category.changed = false
      this.$refs.category.imageFile = null
      let newCategory = {
        name: '',
        name_ar: '',
        image: '',
        parent_id: '',
        src: '',
      }
      this.$store.commit('updateSelectedCategory', { category: newCategory })
    },

    openConfirmationDialog(c) {
      this.confirmationDialog = true
    },

    closeConfirmationDialog() {
      this.confirmationDialog = false
    },

    deleteCategory() {
      this.loading = true
      this.$store.dispatch('deleteCategory', this.selectedCategory).finally(() => {
        this.loading = false
        this.closeConfirmationDialog()
        this.close()
      })
    },

    closeCloneDialog() {
      this.cloneDialog = false
    },

    // sort(categories) {
    //   categories === null
    //     ? this.$store.commit('setCategoriesToSort', this.categories)
    //     : this.$store.commit('setCategoriesToSort', categories)
    //   this.sortDialog = true
    // },
    sort(categories) {
      this.$store.commit('setCategoriesToSort', categories ?? this.categories);
      this.sortDialog = true;
    },

    duplicateCategory() {
      this.loading = true
      this.$store.dispatch('duplicateCategory', this.selectedCategory.category).finally(() => {
        this.loading = false
        this.close()
      })
    },

    closeSortDialog() {
      this.$store.commit('setCategoriesToSort', [])
      this.sortDialog = false
    },
  },
}
</script>
