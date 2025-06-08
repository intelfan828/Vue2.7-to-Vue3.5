<template>
  <div>
    <v-navigation-drawer
      fixed
      v-model="customizerIn"
      :width="300"
      :right="!rtlLayout"
      location="right"
      app
      temporary
      class="clearfix"
      style="background-color: white;"
    >
      <v-toolbar color="primary" dark>
        <v-toolbar-title>{{ $t('message.themeOptions') }}</v-toolbar-title>
      </v-toolbar>
      <v-tabs grow v-model="tab">
        <v-tab :value="1">{{ $t('message.general') }}</v-tab>
        <v-tab :value="2">{{ $t('message.advance') }}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="1">
            <PerfectScrollbar class="customizer-scroll-area" :options="settings">
              <div class="inner-toolbar">
                <theme-provider></theme-provider>
                <sidebar-filters-provider></sidebar-filters-provider>
                <header-filters-provider v-if="isHeaderFilterAvaiable()"></header-filters-provider>
                <v-row>
                  <v-col>
                    <p>{{ $t('message.routerAnimation') }}</p>
                    <v-select
                      outlined
                      v-model="selectedRouterAnimation"
                      :items="routerAnimations"
                      label="Select Animation"
                      @update:model-value="selectedRouterAnimation"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>
            </PerfectScrollbar>
        </v-window-item>
        <v-window-item :value="2">
            <PerfectScrollbar class="customizer-scroll-area" :options="settings">
              <div class="inner-toolbar sidebar-overlay-color">
                <v-list class="mb-5 theme-layouts">
                  <!--								<v-list-item >-->
                  <!--									<template class="py-0">-->
                  <!--										<v-checkbox-->
                  <!--											:label="$t('message.darkMode')"-->
                  <!--											color="primary"-->
                  <!--											@change="emitDarkMode($event)"-->
                  <!--										></v-checkbox>-->
                  <!--									</template>-->
                  <!--								</v-list-item>-->
                  <v-list-item v-if="isSidebarAvailable()">
                    <v-checkbox
                      v-model="collapseSidebar"
                      :label="$t('message.collapseSidebar')"
                      color="primary"
                      @change="emitCollapseSidebar"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                      v-model="rtlLayout"
                      :label="$t('message.rtlLayout')"
                      color="primary"
                      @change="emitRtlLayout($event)"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item v-if="isSidebarAvailable()">
                    <v-checkbox
                      v-model="backgroundImage"
                      :label="$t('message.backgroundImage')"
                      color="primary"
                      @change="emitEnableBackgroundImage"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
                <div class="sidebar-images" v-if="backgroundImage">
                  <div
                    class="d-inline-block mx-1 mb-2"
                    v-for="backgroundImage in sidebarBackgroundImages"
                    :key="backgroundImage.id"
                  >
                    <a
                      href="javascript:void(0)"
                      class="img-holder"
                      :class="{ active: selectedSidebarBgImage.id === backgroundImage.id }"
                    >
                      <img
                        :src="backgroundImage.url"
                        height="200"
                        width="75"
                        @click="changeBackgroundImage(backgroundImage)"
                        alt="dynamic sidebar images"
                        class="img-responsive"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </PerfectScrollbar>
        </v-window-item>
      </v-window>
    </v-navigation-drawer>
    
    <div class="app-customizer">
      <a class="customizer-toggle primary v-step-4" href="javascript:;" @click="toggleCustomizer">
        <i class="zmdi zmdi-settings zmdi-hc-spin font-lg"></i>
      </a>
    </div>
  </div>
</template>

<script>
import ThemeProvider from './ThemeProvider'
import { mapGetters } from 'vuex'
import SidebarFiltersProvider from './SidebarFiltersProvider'
import HeaderFiltersProvider from './HeaderFiltersProvider'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  components: {
    ThemeProvider,
    SidebarFiltersProvider,
    HeaderFiltersProvider,
  },
  data() {
    return {
      customizerIn: false,
      settings: {
        maxScrollbarLength: 160,
      },
    }
  },
  methods: {
    // dark mode handlerleft="ifRtlLayout" :right="!ifRtlLayout"
    emitDarkMode(e) {
      this.$vuetify.theme.dark = e
    },
    // collapse sidebar handler
    emitCollapseSidebar() {
      this.$store.dispatch('collapseSidebar')
    },
    // enable background image handler
    emitEnableBackgroundImage() {
      this.$store.dispatch('backgroundImage')
    },
    // change BackgroundImage customizer
    changeBackgroundImage(sidebarImage) {
      this.$store.dispatch('changeBackgroundImage', sidebarImage)
    },
    // toggle customizer
    toggleCustomizer() {
      this.customizerIn = !this.customizerIn
    },
    // RTL handler
    emitRtlLayout(e) {
      this.$vuetify.rtl = e
      this.$store.dispatch('rtlLayout')
    },
    // router animation handler
    changeRouterAnimation(value) {
      this.$store.dispatch('changeRouterAnimation', value)
    },
    isHeaderFilterAvaiable() {
      let layout = getCurrentAppLayout(this.$router)
      if (layout === 'boxed' || layout === 'boxed-v2') {
        return false
      }
      return true
    },
    isSidebarAvailable() {
      let layout = getCurrentAppLayout(this.$router)
      if (layout === 'boxed' || layout === 'horizontal' || layout === 'boxed-v2') {
        return false
      }
      return true
    },
  },
  computed: {
    ...mapGetters([
      'collapseSidebar',
      'boxLayout',
      'rtlLayout',
      'backgroundImage',
      'sidebarBackgroundImages',
      'selectedSidebarBgImage',
      'sidebarFilters',
      'sidebarSelectedFilter',
      'routerAnimations',
      'selectedRouterAnimation',
    ]),
  },
}
</script>

<style scoped>
.customizer-scroll-area {
  position: relative;
  height: 80vh;
}
</style>

<script setup>
import { ref } from 'vue'

const tab = ref(1)
</script>
