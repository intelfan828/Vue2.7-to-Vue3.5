import MiniSidebarLayout from '@/container/MiniSidebarLayout'

// dashboard components
const Ecommerce = () => import('@/views/dashboard/Ecommerce')
const WebAnalytics = () => import('@/views/dashboard/WebAnalytics')
const Magazine = () => import('@/views/dashboard/Magazine')
const News = () => import('@/views/dashboard/News')
const Agency = () => import('@/views/dashboard/Agency')
const Saas = () => import('@/views/dashboard/Saas')

// Crypto components
const Crypto = () => import('@/views/crypto/Crypto')
const MarketCap = () => import('@/views/crypto/MarketCap')
const Wallet = () => import('@/views/crypto/Wallet')
const Trade = () => import('@/views/crypto/Trade')

// CRM components
const Projects = () => import('@/views/crm/Projects')
const ProjectDetails = () => import('@/views/crm/ProjectDetails')
const Clients = () => import('@/views/crm/Clients')
const Reports = () => import('@/views/crm/Reports')
const Dashboard = () => import('@/views/crm/Dashboard')

//courses components
const Courses = () => import('@/views/courses/Courses')
const CourseList = () => import('@/views/courses/CourseList')
const CoursesDetail = () => import('@/views/courses/CoursesDetail')
const SignIn = () => import('@/views/courses/SignIn')
const Payment = () => import('@/views/courses/Payment')

// Widgets component
const ChartWidgets = () => import('@/views/widgets/chart-widgets/ChartWidgets')
const UserWidgets = () => import('@/views/widgets/user-widgets/UserWidgets')

//Ecommerce Widgets
const Shop = () => import('@/views/ecommerce/Shop')
const ProductDetail = () => import('@/views/ecommerce/ProductDetail')
const AddProduct = () => import('@/views/ecommerce/AddProduct')
const EditProduct = () => import('@/views/ecommerce/EditProduct')
const EditDetail = () => import('@/views/ecommerce/EditDetail')
const Cart = () => import('@/views/ecommerce/Cart')
const Checkout = () => import('@/views/ecommerce/Checkout')
const CreditCard = () => import('@/views/ecommerce/CreditCard')

// Inbox component
const Inbox = () => import('@/views/inbox/Inbox')

// chat component
const Chat = () => import('@/views/chat/Chat')

// calendar components
const Calendar = () => import('@/views/calendar/Calendar')

// ui components
const AppBars = () => import('@/views/ui-elements/AppBars')
const Banners = () => import('@/views/ui-elements/Banners')
const ListItemGroups = () => import('@/views/ui-elements/ListItemGroups')
const SlideGroups = () => import('@/views/ui-elements/SlideGroups')
const Overlays = () => import('@/views/ui-elements/Overlays')
const ChipGroups = () => import('@/views/ui-elements/ChipGroups')
const FileInput = () => import('@/views/ui-elements/FileInput')
const ColorPickers = () => import('@/views/ui-elements/ColorPickers')
const Buttons = () => import('@/views/ui-elements/Buttons')
const Cards = () => import('@/views/ui-elements/Cards')
const Grid = () => import('@/views/ui-elements/Grid')
const Groups = () => import('@/views/ui-elements/Groups')
const Hover = () => import('@/views/ui-elements/Hover')
const Images = () => import('@/views/ui-elements/Images')
const List = () => import('@/views/ui-elements/List')
const Menu = () => import('@/views/ui-elements/Menu')
const Ratings = () => import('@/views/ui-elements/Ratings')
const Slider = () => import('@/views/ui-elements/Slider')
const Snackbar = () => import('@/views/ui-elements/Snackbar')
const Tooltip = () => import('@/views/ui-elements/Tooltip')
const Dialog = () => import('@/views/ui-elements/Dialog')
const Select = () => import('@/views/ui-elements/Select')
const Input = () => import('@/views/ui-elements/Input')
const Checkbox = () => import('@/views/ui-elements/Checkbox')
const Radio = () => import('@/views/ui-elements/Radio')
const Toolbar = () => import('@/views/ui-elements/Toolbar')
const Progress = () => import('@/views/ui-elements/Progress')
const Tabs = () => import('@/views/ui-elements/Tabs')
const Carousel = () => import('@/views/ui-elements/Carousel')
const Chips = () => import('@/views/ui-elements/Chips')
const Datepicker = () => import('@/views/ui-elements/Datepicker')
const Timepicker = () => import('@/views/ui-elements/Timepicker')

// chart components
const VueChartjs = () => import('@/views/charts/VueChartjs')
const VueEcharts = () => import('@/views/charts/VueEcharts')

// maps views
const GoogleMaps = () => import('@/views/maps/GoogleMaps')
const LeafletMaps = () => import('@/views/maps/LeafletMaps')

// Pages views
const Blank = () => import('@/views/pages/Blank')
const Blog = () => import('@/views/pages/Blog')
const Gallery = () => import('@/views/pages/Gallery')
const Pricing1 = () => import('@/views/pages/Pricing-1')
const Pricing2 = () => import('@/views/pages/Pricing-2')

// users views
const UserProfile = () => import('@/views/users/UserProfile')
const UsersList = () => import('@/views/users/UsersList')

// drag-drop components
const Vue2Dragula = () => import('@/views/drag-drop/Vue2Dragula')
const VueDraggable = () => import('@/views/drag-drop/Vuedraggable')
const VueDraggableResizeable = () => import('@/views/drag-drop/VueDraggableResizable')

// icons components
const Themify = () => import('@/views/icons/Themify')
const Material = () => import('@/views/icons/Material')

// editor components
const QuillEditor = () => import('@/views/editor/QuillEditor')
const WYSIWYG = () => import('@/views/editor/WYSIWYG')

// form componenets
const FormValidation = () => import('@/views/forms/FormValidation')
const Stepper = () => import('@/views/forms/Stepper')

// Data table componenets
const SimpleTable = () => import('@/views/tables/SimpleTable')
const Standard = () => import('@/views/tables/Standard')
const Slots = () => import('@/views/tables/Slots')
const SelectableRows = () => import('@/views/tables/SelectableRows')
const SearchWithText = () => import('@/views/tables/SearchWithText')

// Timelines component
const Usage = () => import('@/views/timelines/Usage')
const SmallDots = () => import('@/views/timelines/SmallDots')
const IconDots = () => import('@/views/timelines/IconDots')
const ColoredDots = () => import('@/views/timelines/ColoredDots')
const OppositeSlot = () => import('@/views/timelines/OppositeSlot')
const DenseAlert = () => import('@/views/timelines/DenseAlert')
const Advanced = () => import('@/views/timelines/Advanced')

// Treeview component
const Treeview = () => import('@/views/treeview/Treeview')

// Extensions components
const ImageCropper = () => import('@/views/extensions/ImageCropper')
const VideoPlayer = () => import('@/views/extensions/VideoPlayer')
const Dropzone = () => import('@/views/extensions/Dropzone')

export default {
  path: '/mini',
  component: MiniSidebarLayout,
  redirect: '/mini/dashboard/ecommerce',
  children: [
    {
      component: Ecommerce,
      path: '/mini/dashboard/ecommerce',
      meta: {
        requiresAuth: true,
        title: 'message.ecommerce',
        breadcrumb: null,
      },
    },
    {
      component: WebAnalytics,
      path: '/mini/dashboard/web-analytics',
      meta: {
        requiresAuth: true,
        title: 'message.webAnalytics',
        breadcrumb: null,
      },
    },
    {
      component: Magazine,
      path: '/mini/dashboard/magazine',
      meta: {
        requiresAuth: true,
        title: 'message.magazine',
        breadcrumb: null,
      },
    },
    {
      component: News,
      path: '/mini/dashboard/news',
      meta: {
        requiresAuth: true,
        title: 'message.news',
        breadcrumb: null,
      },
    },
    {
      component: Agency,
      path: '/mini/dashboard/agency',
      meta: {
        requiresAuth: true,
        title: 'message.agency',
        breadcrumb: null,
      },
    },
    {
      component: Saas,
      path: '/mini/dashboard/saas',
      meta: {
        requiresAuth: true,
        title: 'message.saas',
        breadcrumb: null,
      },
    },

    {
      path: '/mini/dashboard/crypto',
      component: Crypto,
      meta: {
        requiresAuth: true,
        title: 'message.crypto',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Crypto',
          },
        ],
      },
    },
    {
      path: '/mini/crypto/market-cap',
      component: MarketCap,
      meta: {
        requiresAuth: true,
        title: 'message.marketCap',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'MarketCap',
          },
        ],
      },
    },
    {
      path: '/mini/crypto/trade',
      component: Trade,
      meta: {
        requiresAuth: true,
        title: 'message.trade',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Trade',
          },
        ],
      },
    },
    {
      path: '/mini/crypto/wallet',
      component: Wallet,
      meta: {
        requiresAuth: true,
        title: 'message.wallet',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Wallet',
          },
        ],
      },
    },

    {
      path: '/mini/crm/projects',
      component: Projects,
      meta: {
        requiresAuth: true,
        title: 'message.projects',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Projects',
          },
        ],
      },
    },

    {
      path: '/mini/crm/projectDetails/:id',
      component: ProjectDetails,
      meta: {
        requiresAuth: true,
        title: 'message.projectDetails',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'projectDetails',
          },
        ],
      },
    },

    {
      path: '/mini/crm/clients',
      component: Clients,
      meta: {
        requiresAuth: true,
        title: 'message.clients',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Clients',
          },
        ],
      },
    },

    {
      path: '/mini/crm/reports',
      component: Reports,
      meta: {
        requiresAuth: true,
        title: 'message.reports',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Reports',
          },
        ],
      },
    },
    {
      path: '/mini/dashboard/crm',
      component: Dashboard,
      meta: {
        requiresAuth: true,
        title: 'message.dashboard',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Dashboard',
          },
        ],
      },
    },

    {
      path: '/mini/courses',
      component: Courses,
      meta: {
        requiresAuth: true,
        title: 'message.courses',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Courses',
          },
        ],
      },
    },
    {
      path: '/mini/courses/courses-list',
      component: CourseList,
      meta: {
        requiresAuth: true,
        title: 'message.coursesList',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'List',
          },
        ],
      },
    },
    {
      path: '/mini/courses/courses-detail',
      component: CoursesDetail,
      meta: {
        requiresAuth: true,
        title: 'message.courseDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Detail',
          },
        ],
      },
    },
    {
      path: '/mini/courses/sign-in',
      component: SignIn,
      meta: {
        requiresAuth: true,
        title: 'message.signIn',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Sign In',
          },
        ],
      },
    },
    {
      path: '/mini/courses/payment',
      component: Payment,
      meta: {
        requiresAuth: true,
        title: 'message.payment',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Payment',
          },
        ],
      },
    },
    {
      path: '/mini/widgets/user-widgets',
      component: UserWidgets,
      meta: {
        requiresAuth: true,
        title: 'message.user',
        breadcrumb: [
          {
            breadcrumbInactive: 'Widgets /',
          },
          {
            breadcrumbActive: 'User',
          },
        ],
      },
    },
    {
      path: '/mini/widgets/chart-widgets',
      component: ChartWidgets,
      meta: {
        requiresAuth: true,
        title: 'message.charts',
        breadcrumb: [
          {
            breadcrumbInactive: 'Widgets /',
          },
          {
            breadcrumbActive: 'Charts',
          },
        ],
      },
    },

    {
      path: '/mini/ecommerce/shop',
      component: Shop,
      meta: {
        requiresAuth: true,
        title: 'message.shop',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Shop',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/product-detail/:category/:id',
      component: ProductDetail,
      meta: {
        requiresAuth: true,
        title: 'message.productDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Product Detail',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/add-product',
      component: AddProduct,
      meta: {
        requiresAuth: true,
        title: 'message.addProduct',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Add Product',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/edit-product',
      component: EditProduct,
      meta: {
        requiresAuth: true,
        title: 'message.editProduct',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Edit Product',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/edit-detail/:category/:id',
      component: EditDetail,
      meta: {
        requiresAuth: true,
        title: 'message.editDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Edit Detail',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/cart',
      component: Cart,
      meta: {
        requiresAuth: true,
        title: 'message.cart',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Cart',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/checkout',
      component: Checkout,
      meta: {
        requiresAuth: true,
        title: 'message.checkout',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Checkout',
          },
        ],
      },
    },
    {
      path: '/mini/ecommerce/cards',
      component: CreditCard,
      meta: {
        requiresAuth: true,
        title: 'message.cards',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Cards',
          },
        ],
      },
    },
    {
      path: '/mini/pages/blog',
      component: Blog,
      meta: {
        requiresAuth: true,
        title: 'message.blog',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Blog',
          },
        ],
      },
    },
    {
      component: Gallery,
      path: '/mini/pages/gallery',
      meta: {
        requiresAuth: true,
        title: 'message.gallery',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Gallery',
          },
        ],
      },
    },
    {
      component: Pricing1,
      path: '/mini/pages/pricing-1',
      meta: {
        requiresAuth: true,
        title: 'message.pricing1',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Pricing-1',
          },
        ],
      },
    },
    {
      component: Pricing2,
      path: '/mini/pages/pricing-2',
      meta: {
        requiresAuth: true,
        title: 'message.pricing2',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Pricing-2',
          },
        ],
      },
    },
    {
      component: Blank,
      path: '/mini/pages/blank',
      meta: {
        requiresAuth: true,
        title: 'message.blank',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Blank',
          },
        ],
      },
    },
    {
      component: Inbox,
      path: '/mini/inbox',
      meta: {
        requiresAuth: true,
        title: 'message.inbox',
        breadcrumb: null,
      },
    },
    {
      component: Chat,
      path: '/mini/chat',
      meta: {
        requiresAuth: true,
        title: 'message.chat',
        breadcrumb: null,
      },
    },
    {
      path: '/mini/treeview',
      component: Treeview,
      meta: {
        requiresAuth: true,
        title: 'message.treeview',
        breadcrumb: [
          {
            breadcrumbInactive: null,
          },
          {
            breadcrumbActive: 'Treeview',
          },
        ],
      },
    },
    // Timelines Components
    {
      path: '/mini/timelines/usage',
      component: Usage,
      meta: {
        requiresAuth: true,
        title: 'message.usage',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Usage',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/smalldots',
      component: SmallDots,
      meta: {
        requiresAuth: true,
        title: 'message.smallDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Small Dots',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/icondots',
      component: IconDots,
      meta: {
        requiresAuth: true,
        title: 'message.iconDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Icon Dots',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/coloreddots',
      component: ColoredDots,
      meta: {
        requiresAuth: true,
        title: 'message.coloredDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Colored Dots',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/oppositeslot',
      component: OppositeSlot,
      meta: {
        requiresAuth: true,
        title: 'message.oppositeSlot',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Opposite Slot',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/densealert',
      component: DenseAlert,
      meta: {
        requiresAuth: true,
        title: 'message.denseAlert',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Dense Alert',
          },
        ],
      },
    },
    {
      path: '/mini/timelines/advanced',
      component: Advanced,
      meta: {
        requiresAuth: true,
        title: 'message.advanced',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Advanced',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/app-bars',
      component: AppBars,
      meta: {
        requiresAuth: true,
        title: 'message.appBars',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'App Bars',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/banners',
      component: Banners,
      meta: {
        requiresAuth: true,
        title: 'message.banners',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Banners',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/list-item-groups',
      component: ListItemGroups,
      meta: {
        requiresAuth: true,
        title: 'message.ListItemGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'List Item Groups',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/slide-groups',
      component: SlideGroups,
      meta: {
        requiresAuth: true,
        title: 'message.slideGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Slide Groups',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/chip-groups',
      component: ChipGroups,
      meta: {
        requiresAuth: true,
        title: 'message.chipGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Chip Groups',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/overlays',
      component: Overlays,
      meta: {
        requiresAuth: true,
        title: 'message.overlays',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'overlays',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/file-input',
      component: FileInput,
      meta: {
        requiresAuth: true,
        title: 'message.fileInput',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'File Input',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/color-pickers',
      component: ColorPickers,
      meta: {
        requiresAuth: true,
        title: 'message.colorPickers',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Color Picker',
          },
        ],
      },
    },
    {
      component: Buttons,
      path: '/mini/ui-elements/buttons',
      meta: {
        requiresAuth: true,
        title: 'message.buttons',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Buttons',
          },
        ],
      },
    },
    {
      component: Cards,
      path: '/mini/ui-elements/cards',
      meta: {
        requiresAuth: true,
        title: 'message.cards',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Cards',
          },
        ],
      },
    },
    {
      component: Checkbox,
      path: '/mini/ui-elements/checkbox',
      meta: {
        requiresAuth: true,
        title: 'message.checkbox',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Checkbox',
          },
        ],
      },
    },
    {
      component: Carousel,
      path: '/mini/ui-elements/carousel',
      meta: {
        requiresAuth: true,
        title: 'message.carousel',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Carousel',
          },
        ],
      },
    },
    {
      component: Chips,
      path: '/mini/ui-elements/chips',
      meta: {
        requiresAuth: true,
        title: 'message.chips',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Chips',
          },
        ],
      },
    },
    {
      component: Datepicker,
      path: '/mini/ui-elements/datepicker',
      meta: {
        requiresAuth: true,
        title: 'message.datepicker',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Datepicker',
          },
        ],
      },
    },
    {
      component: Dialog,
      path: '/mini/ui-elements/dialog',
      meta: {
        requiresAuth: true,
        title: 'message.dialog',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Dialog',
          },
        ],
      },
    },
    {
      component: Grid,
      path: '/mini/ui-elements/grid',
      meta: {
        requiresAuth: true,
        title: 'message.grid',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Grid',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/groups',
      component: Groups,
      meta: {
        requiresAuth: true,
        title: 'message.groups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Groups',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/hover',
      component: Hover,
      meta: {
        requiresAuth: true,
        title: 'message.hover',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Hover',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/images',
      component: Images,
      meta: {
        requiresAuth: true,
        title: 'message.images',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Images',
          },
        ],
      },
    },
    {
      component: Input,
      path: '/mini/ui-elements/input',
      meta: {
        requiresAuth: true,
        title: 'message.input',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Input',
          },
        ],
      },
    },
    {
      component: List,
      path: '/mini/ui-elements/list',
      meta: {
        requiresAuth: true,
        title: 'message.list',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'List',
          },
        ],
      },
    },
    {
      component: Menu,
      path: '/mini/ui-elements/menu',
      meta: {
        requiresAuth: true,
        title: 'message.menu',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Menu',
          },
        ],
      },
    },
    {
      component: Progress,
      path: '/mini/ui-elements/progress',
      meta: {
        requiresAuth: true,
        title: 'message.progress',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Progress',
          },
        ],
      },
    },
    {
      component: Radio,
      path: '/mini/ui-elements/radio',
      meta: {
        requiresAuth: true,
        title: 'message.radio',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Radio',
          },
        ],
      },
    },
    {
      component: Select,
      path: '/mini/ui-elements/select',
      meta: {
        requiresAuth: true,
        title: 'message.select',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Select',
          },
        ],
      },
    },
    {
      path: '/mini/ui-elements/ratings',
      component: Ratings,
      meta: {
        requiresAuth: true,
        title: 'message.ratings',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Ratings',
          },
        ],
      },
    },
    {
      component: Slider,
      path: '/mini/ui-elements/slider',
      meta: {
        requiresAuth: true,
        title: 'message.slider',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Slider',
          },
        ],
      },
    },
    {
      component: Snackbar,
      path: '/mini/ui-elements/snackbar',
      meta: {
        requiresAuth: true,
        title: 'message.snackbar',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Snackbar',
          },
        ],
      },
    },
    {
      component: Tabs,
      path: '/mini/ui-elements/tabs',
      meta: {
        requiresAuth: true,
        title: 'message.tabs',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Tabs',
          },
        ],
      },
    },
    {
      component: Toolbar,
      path: '/mini/ui-elements/toolbar',
      meta: {
        requiresAuth: true,
        title: 'message.toolbar',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Toolbar',
          },
        ],
      },
    },
    {
      component: Tooltip,
      path: '/mini/ui-elements/tooltip',
      meta: {
        requiresAuth: true,
        title: 'message.tooltip',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Tooltip',
          },
        ],
      },
    },
    {
      component: Timepicker,
      path: '/mini/ui-elements/timepicker',
      meta: {
        requiresAuth: true,
        title: 'message.timepicker',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Timepicker',
          },
        ],
      },
    },
    {
      component: FormValidation,
      path: '/mini/forms/form-validation',
      meta: {
        requiresAuth: true,
        title: 'message.formValidation',
        breadcrumb: [
          {
            breadcrumbInactive: 'Forms /',
          },
          {
            breadcrumbActive: 'FormValidation',
          },
        ],
      },
    },
    {
      component: Stepper,
      path: '/mini/forms/stepper',
      meta: {
        requiresAuth: true,
        title: 'message.stepper',
        breadcrumb: [
          {
            breadcrumbInactive: 'Forms /',
          },
          {
            breadcrumbActive: 'Stepper',
          },
        ],
      },
    },
    {
      component: VueChartjs,
      path: '/mini/charts/vue-chartjs',
      meta: {
        requiresAuth: true,
        title: 'message.vueChartjs',
        breadcrumb: [
          {
            breadcrumbInactive: 'Charts /',
          },
          {
            breadcrumbActive: 'Vue Chartjs',
          },
        ],
      },
    },
    {
      component: VueEcharts,
      path: '/mini/charts/vue-echarts',
      meta: {
        requiresAuth: true,
        title: 'message.vueEcharts',
        breadcrumb: [
          {
            breadcrumbInactive: 'Charts /',
          },
          {
            breadcrumbActive: 'Vue Echarts',
          },
        ],
      },
    },
    {
      component: Themify,
      path: '/mini/icons/themify',
      meta: {
        requiresAuth: true,
        title: 'message.themify',
        breadcrumb: [
          {
            breadcrumbInactive: 'Icons /',
          },
          {
            breadcrumbActive: 'Themify',
          },
        ],
      },
    },
    {
      component: Material,
      path: '/mini/icons/material',
      meta: {
        requiresAuth: true,
        title: 'message.material',
        breadcrumb: [
          {
            breadcrumbInactive: 'Icons /',
          },
          {
            breadcrumbActive: 'Material',
          },
        ],
      },
    },
    {
      path: '/mini/tables/simple',
      component: SimpleTable,
      meta: {
        requiresAuth: true,
        title: 'message.simpleTable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Simple',
          },
        ],
      },
    },
    {
      component: Standard,
      path: '/mini/tables/standard',
      meta: {
        requiresAuth: true,
        title: 'message.standard',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Standard',
          },
        ],
      },
    },
    {
      component: Slots,
      path: '/mini/tables/slots',
      meta: {
        requiresAuth: true,
        title: 'message.slots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Slots',
          },
        ],
      },
    },
    {
      component: SelectableRows,
      path: '/mini/tables/selectablerows',
      meta: {
        requiresAuth: true,
        title: 'message.selectable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Selectable Rows',
          },
        ],
      },
    },
    {
      component: SearchWithText,
      path: '/mini/tables/searchwithtext',
      meta: {
        requiresAuth: true,
        title: 'message.searchRow',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Search Row',
          },
        ],
      },
    },
    {
      component: GoogleMaps,
      path: '/mini/maps/google-maps',
      meta: {
        requiresAuth: true,
        title: 'message.googleMaps',
        breadcrumb: [
          {
            breadcrumbInactive: 'Maps /',
          },
          {
            breadcrumbActive: 'Google Map',
          },
        ],
      },
    },
    {
      component: LeafletMaps,
      path: '/mini/maps/leaflet-maps',
      meta: {
        requiresAuth: true,
        title: 'message.leafletMaps',
        breadcrumb: [
          {
            breadcrumbInactive: 'Maps /',
          },
          {
            breadcrumbActive: 'Leaflet Map',
          },
        ],
      },
    },
    {
      component: UserProfile,
      path: '/mini/users/user-profile',
      meta: {
        requiresAuth: true,
        title: 'message.userProfile',
        breadcrumb: [
          {
            breadcrumbInactive: 'Users /',
          },
          {
            breadcrumbActive: 'User Profile',
          },
        ],
      },
    },
    {
      component: UsersList,
      path: '/mini/users/users-list',
      meta: {
        requiresAuth: true,
        title: 'message.usersList',
        breadcrumb: [
          {
            breadcrumbInactive: 'Users /',
          },
          {
            breadcrumbActive: 'Users List',
          },
        ],
      },
    },
    {
      component: Calendar,
      path: '/mini/calendar',
      meta: {
        requiresAuth: true,
        title: 'message.calendar',
        breadcrumb: [
          {
            breadcrumbInactive: null,
          },
          {
            breadcrumbActive: 'Calendar',
          },
        ],
      },
    },
    {
      component: QuillEditor,
      path: '/mini/editor/quilleditor',
      meta: {
        requiresAuth: true,
        title: 'message.quillEditor',
        breadcrumb: [
          {
            breadcrumbInactive: 'Editor /',
          },
          {
            breadcrumbActive: 'Quill Editor',
          },
        ],
      },
    },
    {
      component: WYSIWYG,
      path: '/mini/editor/wysiwyg',
      meta: {
        requiresAuth: true,
        title: 'message.wYSIWYG',
        breadcrumb: [
          {
            breadcrumbInactive: 'Editor /',
          },
          {
            breadcrumbActive: 'WYSIWYG',
          },
        ],
      },
    },
    {
      component: Vue2Dragula,
      path: '/mini/drag-drop/vue2dragula',
      meta: {
        requiresAuth: true,
        title: 'message.vue2Dragula',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Vue2 Dragula',
          },
        ],
      },
    },
    {
      component: VueDraggable,
      path: '/mini/drag-drop/vuedraggable',
      meta: {
        requiresAuth: true,
        title: 'message.vueDraggable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Vue Draggable',
          },
        ],
      },
    },
    {
      component: VueDraggableResizeable,
      path: '/mini/drag-drop/vuedraggableresizeable',
      meta: {
        requiresAuth: true,
        title: 'message.draggableResizeable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Draggable Resizeable',
          },
        ],
      },
    },
    {
      path: '/mini/image-cropper',
      component: ImageCropper,
      meta: {
        requiresAuth: true,
        title: 'message.imageCropper',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Image Cropper',
          },
        ],
      },
    },
    {
      path: '/mini/video-player',
      component: VideoPlayer,
      meta: {
        requiresAuth: true,
        title: 'message.videoPlayer',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Video Player',
          },
        ],
      },
    },
    {
      path: '/mini/dropzone',
      component: Dropzone,
      meta: {
        requiresAuth: true,
        title: 'message.dropzone',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Dropzone',
          },
        ],
      },
    },
  ],
}
