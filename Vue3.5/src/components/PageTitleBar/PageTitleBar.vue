<template>
  <v-container fluid>
    <app-card :fullBlock="true" class="title-bar">
      <v-breadcrumbs class="pa-6 pr-4" :items="breadcrumbItems" v-if="breadcrumbItems != null">
        <template v-slot:item="{ item }">
          <h2 class="text-capitalize mb-0">{{ $t(item.title) }}</h2>
          <div class="spacer"></div>
          <v-breadcrumbs-item>
            <a href="javascript:void(0)">{{ item.breadcrumb[0].breadcrumbInactive }}</a>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item disabled>
            {{ item.breadcrumb[1].breadcrumbActive }} / {{ projectId }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </app-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbItems: [],
      projectId: null,
    }
  },
  created() {
    this.breadcrumbItems[0] = this.$route.meta
  },
  mounted() {
    this.projectId = this.$route.params.id
  },
}
</script>
