/**
 * App Entry File
 * Vuely: A Powerfull Material Design Admin Template
 * Copyright 2018. All Rights Reserved
 * Created By: The Iron Network, LLC
 * Made with Love
 */
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { createI18n } from 'vue-i18n'
import wysiwyg from 'vue-wysiwyg'
import Notifications from '@kyvg/vue3-notification'
import velocity from 'velocity-animate'
import Nprogress from 'nprogress'
import VueTour from 'vue3-tour'
import VueFullscreen from 'vue-fullscreen'
import VueVideoPlayer from '@videojs-player/vue'
import Croppa from 'vue-croppa'
import { vue3Spinner } from 'vue3-spinner'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import countTo from 'vue3-count-to'
import breadcrumbs from 'vue-3-breadcrumbs'

// Plugins
import vuetify from '@/plugins/vuetify'
import PusherPlugin from '@/plugins/pusher'

// global components
import GlobalComponents from './globalComponents'

// app.vue
import App from './App.vue'

// router
import router from './router'

// store
import { store } from './store/store'

// mixins
import Permissions from './mixins/Permissions'

// include all css files
import './lib/VuelyCss'

// Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css'
import '@mdi/font/css/materialdesignicons.css'

// messages
import messages from './lang'

import './registerServiceWorker'

const Vue = createApp(App)

Vue.mixin(Permissions)

Vue.config.productionTip = false

// navigation guards before each
router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('user') === null) {
      next({
        path: '/session/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

// navigation guard after each
router.afterEach((to, from) => {
  Nprogress.done()
  setTimeout(() => {
    const contentWrapper = document.querySelector('.v-main__wrap')
    if (contentWrapper !== null) {
      contentWrapper.scrollTop = 0
    }
    const boxedLayout = document.querySelector('.app-boxed-layout .app-content')
    if (boxedLayout !== null) {
      boxedLayout.scrollTop = 0
    }
    const miniLayout = document.querySelector('.app-mini-layout .app-content')
    if (miniLayout !== null) {
      miniLayout.scrollTop = 0
    }
  }, 200)
})

// plugins
Vue.use(vuetify)
Vue.use(PusherPlugin, { apiKey: '242c0a48d7776cc97add', cluster: 'eu' })
const termsEditorOptions = {
  hideModules: {
    image: true,
    table: true,
    removeFormat: true,
    code: true,
    separator: true,
  },
}

Vue.use(VueTour)
Vue.use(vue3Spinner)
Vue.use(wysiwyg, termsEditorOptions)
Vue.use(Notifications, { velocity })
Vue.use(VueFullscreen)
Vue.use(GlobalComponents)
Vue.use(VueVideoPlayer)
Vue.use(Croppa)
Vue.use(PerfectScrollbarPlugin)
Vue.use(countTo)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk', // Add your here your google map api key
  },
})

// Create VueI18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: store.getters.selectedLocale.locale, // set locale
  messages, // set locale messages
})
Vue.use(i18n)

// Store
Vue.use(store)

// Router
Vue.use(router)
console.log();
Vue.use(breadcrumbs, {
  includeComponent: false, // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
})

Vue.mount('#app')
