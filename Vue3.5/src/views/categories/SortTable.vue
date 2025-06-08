<template>

  <v-card class="px-2 py-2">

    <v-card-title>
      Categories
    </v-card-title>

    <v-table
        v-bind:style="rowStyle"
    >
      <thead class="thead-dark">
      <tr>
        <!--        <th class="text-left">Id</th>-->
        <th class="text-left">Name</th>
        <th class="text-left">Name Arabic</th>
      </tr>
      </thead>

      <draggable v-model="categories" tag="tbody" item-key="id">
        <template #item="{ element }">
          <tr>
            <!--          <td>{{ f_package.id }}</td>-->
            <td>{{ element.name }}</td>
            <td>{{ element.name_ar }}</td>
          </tr>
        </template>
      </draggable>

    </v-table>

    <v-card-actions>
      <v-row justify="space-between" class="py-4 px-2">
        <v-btn color="primary"
               @click.stop="save"
               :loading="loading"
               :disabled="loading">
          Save
        </v-btn>
        <v-btn color="warning" @click.stop="cancel">Cancel</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import draggable from "vuedraggable";

export default {
  props: ['close'],

  components: {
    draggable
  },

  oldCategories: null,

  created() {
    this.$options.oldCategories = this.categories;
  },

  computed: {
    categories: {
      get() {
        return this.$store.getters.categoriesToSort;
      },
      set(categories) {
        console.log(categories);
        this.$store.commit('setCategoriesToSort', categories);
      }
    }
  },

  data() {
    return {
      loading: false,
      rowStyle: {
        cursor: 'grab'
      },
      dragging: false
    };
  },

  methods: {
    save() {
      this.loading = true
      this.$store.dispatch('sortCategories', this.categories).finally(() => {
        this.loading = false;
        this.close();
      });
    },

    cancel() {
      this.$store.commit('setCategoriesToSort', this.$options.oldCategories);
      this.close();
    }
  },

};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>