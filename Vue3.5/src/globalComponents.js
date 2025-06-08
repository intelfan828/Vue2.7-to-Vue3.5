/**
 * Vuely Global Components
 */
import { QuillEditor } from '@vueup/vue-quill'
import AppSectionLoader from '@/components/AppSectionLoader/AppSectionLoader'

// delete Confirmation Dialog
import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog/DeleteConfirmationDialog'

// page title bar
import PageTitleBar from '@/components/PageTitleBar/PageTitleBar'

//crypto slider
import CryptoSlider from '@/components/Widgets/CryptoSlider'

// App Card component
import AppCard from '@/components/AppCard/AppCard'

// stats card
import StatsCard from '@/components/StatsCard/StatsCard'
import StatsCardV2 from '@/components/StatsCardV2/StatsCardV2'

// section tooltip
import SectionTooltip from '@/components/SectionTooltip/SectionTooltip'

const GlobalComponents = {
  install(Vue) {
    Vue.component('QuillEditor', QuillEditor);
    Vue.component('appCard', AppCard)
    Vue.component('sectionTooltip', SectionTooltip)
    Vue.component('statsCard', StatsCard)
    Vue.component('statsCardV2', StatsCardV2)
    Vue.component('deleteConfirmationDialog', DeleteConfirmationDialog)
    Vue.component('appSectionLoader', AppSectionLoader)
    Vue.component('pageTitleBar', PageTitleBar)
    // Vue.component('rotateSquare2', RotateSquare2);
    Vue.component('cryptoSlider', CryptoSlider)
  },
}

export default GlobalComponents
