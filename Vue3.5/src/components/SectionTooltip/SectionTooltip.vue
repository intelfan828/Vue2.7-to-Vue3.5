<template>
  <div class="dash-title">
    <span>{{ title }}</span>
    <v-tooltip v-model="open" top>
      <template v-slot:activator="{ on }">
        <a href="javascript:void(0);" @click="on">
          <v-icon icon="md:ti-help-alt" />
        </a>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ['title', 'tooltip'],
  data() {
    return {
      open: false,
    }
  },
}
</script>
