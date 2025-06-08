<template>
  <div class="contact-wrapper">
    <page-title-bar></page-title-bar>
    <v-container fluid pt-0 grid-list-xl>
      <v-layout class="myBlockFlex" row wrap>
        <app-card colClasses="xl12 lg12 md12 sm12 xs12" customClasses="mb-0 client-wrapper">
          <report-tabs></report-tabs>
        </app-card>
      </v-layout>
    </v-container>

    <template>
      <!-- Category Selection Dialog -->
      <v-dialog
        v-model="categoryDialog"
        @click:outside="categoryDialog = false"
        @close="categoryDialog = false"
        max-width="600"
      >
        <v-card class="p-2">
          <v-treeview
            v-model="tree"
            v-model:opened="open"
            v-model:activated="active"
            :items="categories"
            item-value="id"
            activatable
            
            v-bind:style="rowStyle"
            @update:activated="selectCategory"
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
            </template>
          </v-treeview>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>

<script>
import ReportTabs from './ReportTabs'

export default {
  components: {
    ReportTabs,
  },

  created() {
    this.$store.dispatch('reports/fetchReports', this.options).finally(() => {
      this.loading = false
    })
    this.$store.dispatch('getCategoriesTree')
  },

  computed: {
    reports() {
      return this.$store.getters.reports
    },

    meta() {
      return this.$store.getters.reportsMeta
    },

    categories() {
      return this.$store.getters.categories
    },

    options() {
      return this.$store.getters.reportsFilterOptions
    },
  },

  data() {
    return {
      adDialog: false,
      loading: true,
      search: '',
      user: '',
      // options: {
      //   page: 1,
      // },

      // Category tree
      categoryDialog: false,
      selectedCategory: null,
      active: [],
      open: [],
      tree: [],
      rowStyle: {
        cursor: 'pointer',
      },
    }
  },

  methods: {
    fetchPage(page) {
      this.options.page = page
    },

    // fetchAds() {
    //   this.$store.commit('resetAds');
    //   this.loading = true;
    //   // if (this.search) this.options.q = this.search;
    //   if (this.selectedCategory !== null) {
    //     this.options.category = this.selectedCategory.id;
    //   } else {
    //     this.options.category = "";
    //   }
    //   // this.options.featured = true;
    //   this.options.q = this.search;
    //   this.options.user = this.user;
    //   this.$store.dispatch('fetchAds', this.options)
    //       .finally(() => {
    //         this.loading = false;
    //       });
    // },

    showCategoryDialog() {
      this.categoryDialog = true
    },

    selectCategory(category) {
      this.selectedCategory = category ? category[0] : null
      this.options.page = 1
      this.categoryDialog = false
      this.fetchAds()
    },

    resetCategory() {
      this.selectedCategory = null
      this.fetchAds()
    },
  },
}
</script>

<style scoped>
.search-btn {
  position: absolute;
  right: 50px;
}
</style>
