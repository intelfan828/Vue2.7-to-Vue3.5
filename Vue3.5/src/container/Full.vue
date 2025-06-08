<!-- App Main Structure -->
<template>
  <div class="app-default-layout">
    <template v-if="loading">
      <SquareLoader class="spinner" :loading="true"></SquareLoader>
    </template>
    <template v-else>
      <!-- App Header -->
      <app-header></app-header>
      <!-- App Main Content -->
      <v-main>
        <!-- App Router -->
        <router-view v-slot="{ Component }">
          <transition
            name="router-anim"
            :enter-active-class="`animated ${selectedRouterAnimation}`"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </v-main>
      <!-- app customizer -->
      <app-customizer></app-customizer>
      <!-- User Tour -->
      <!-- <tour></tour> -->
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header/Header.vue'
import Customizer from '@/components/Customizer/Customizer.vue'
import Tour from '@/components/Tour/Tour.vue'
import AppConfig from '@/constants/AppConfig'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    appHeader: Header,
    appCustomizer: Customizer,
    Tour,
  },
  computed: {
    ...mapGetters(['selectedRouterAnimation']),
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      setTimeout(() => {
        if (AppConfig.enableUserTour) {
          this.$tours['vuelyTour'].start()
        }
      }, 1000)
    }, 2000)
  },
}
</script>

<style scoped>
.app-default-layout {
  height: 100vh;
}
</style>
