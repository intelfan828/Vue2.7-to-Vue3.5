import HorizontalLayout from '@/container/HorizontalLayout'

// dashboard components
const Dashboard = () => import('@/views/crm/Dashboard')
const Crypto = () => import('@/views/crypto/Crypto')
const Ecommerce = () => import('@/views/dashboard/Ecommerce')
const WebAnalytics = () => import('@/views/dashboard/WebAnalytics')
const Magazine = () => import('@/views/dashboard/Magazine')
const News = () => import('@/views/dashboard/News')
const Agency = () => import('@/views/dashboard/Agency')
const Saas = () => import('@/views/dashboard/Saas')

// Crypto components
const MarketCap = () => import('@/views/crypto/MarketCap')
const Wallet = () => import('@/views/crypto/Wallet')
const Trade = () => import('@/views/crypto/Trade')

// CRM components
const Projects = () => import('@/views/crm/Projects')
const ProjectDetails = () => import('@/views/crm/ProjectDetails')
const Clients = () => import('@/views/crm/Clients')
const Reports = () => import('@/views/crm/Reports')

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
  path: '/horizontal',
  component: HorizontalLayout,
  redirect: '/horizontal/dashboard/ecommerce',
  children: [
    {
      component: Ecommerce,
      path: '/horizontal/dashboard/ecommerce',
      meta: {
        requiresAuth: true,
        title: 'message.ecommerce',
        breadcrumb: null,
      },
    },
    {
      component: WebAnalytics,
      path: '/horizontal/dashboard/web-analytics',
      meta: {
        requiresAuth: true,
        title: 'message.webAnalytics',
        breadcrumb: null,
      },
    },
    {
      component: Magazine,
      path: '/horizontal/dashboard/magazine',
      meta: {
        requiresAuth: true,
        title: 'message.magazine',
        breadcrumb: null,
      },
    },
    {
      component: News,
      path: '/horizontal/dashboard/news',
      meta: {
        requiresAuth: true,
        title: 'message.news',
        breadcrumb: null,
      },
    },
    {
      component: Agency,
      path: '/horizontal/dashboard/agency',
      meta: {
        requiresAuth: true,
        title: 'message.agency',
        breadcrumb: null,
      },
    },
    {
      component: Saas,
      path: '/horizontal/dashboard/saas',
      meta: {
        requiresAuth: true,
        title: 'message.saas',
        breadcrumb: null,
      },
    },

    {
      path: '/horizontal/dashboard/crypto',
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
      path: '/horizontal/crypto/market-cap',
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
      path: '/horizontal/crypto/trade',
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
      path: '/horizontal/crypto/wallet',
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
      path: '/horizontal/crm/projects',
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
      path: '/horizontal/crm/projectDetails/:id',
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
      path: '/horizontal/crm/clients',
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
      path: '/horizontal/crm/reports',
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
      path: '/horizontal/dashboard/crm',
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
      path: '/horizontal/courses',
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
      path: '/horizontal/courses/courses-list',
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
      path: '/horizontal/courses/courses-detail',
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
      path: '/horizontal/courses/sign-in',
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
      path: '/horizontal/courses/payment',
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
      path: '/horizontal/widgets/user-widgets',
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
      path: '/horizontal/widgets/chart-widgets',
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
      path: '/horizontal/ecommerce/shop',
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
      path: '/horizontal/ecommerce/product-detail/:category/:id',
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
      path: '/horizontal/ecommerce/add-product',
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
      path: '/horizontal/ecommerce/edit-product',
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
      path: '/horizontal/ecommerce/edit-detail/:category/:id',
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
      path: '/horizontal/ecommerce/cart',
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
      path: '/horizontal/ecommerce/checkout',
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
      path: '/horizontal/ecommerce/cards',
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
      path: '/horizontal/pages/blog',
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
      path: '/horizontal/pages/gallery',
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
      path: '/horizontal/pages/pricing-1',
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
      path: '/horizontal/pages/pricing-2',
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
      path: '/horizontal/pages/blank',
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
      path: '/horizontal/inbox',
      meta: {
        requiresAuth: true,
        title: 'message.inbox',
        breadcrumb: null,
      },
    },
    {
      component: Chat,
      path: '/horizontal/chat',
      meta: {
        requiresAuth: true,
        title: 'message.chat',
        breadcrumb: null,
      },
    },
    {
      path: '/horizontal/treeview',
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
      path: '/horizontal/timelines/usage',
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
      path: '/horizontal/timelines/smalldots',
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
      path: '/horizontal/timelines/icondots',
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
      path: '/horizontal/timelines/coloreddots',
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
      path: '/horizontal/timelines/oppositeslot',
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
      path: '/horizontal/timelines/densealert',
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
      path: '/horizontal/timelines/advanced',
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
      path: '/horizontal/ui-elements/app-bars',
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
      path: '/horizontal/ui-elements/banners',
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
      path: '/horizontal/ui-elements/list-item-groups',
      component: ListItemGroups,
      meta: {
        requiresAuth: true,
        title: 'message.listItemGroups',
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
      path: '/horizontal/ui-elements/slide-groups',
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
      path: '/horizontal/ui-elements/chip-groups',
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
      path: '/horizontal/ui-elements/overlays',
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
      path: '/horizontal/ui-elements/file-input',
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
      path: '/horizontal/ui-elements/color-pickers',
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
      path: '/horizontal/ui-elements/buttons',
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
      path: '/horizontal/ui-elements/cards',
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
      path: '/horizontal/ui-elements/checkbox',
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
      path: '/horizontal/ui-elements/carousel',
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
      path: '/horizontal/ui-elements/chips',
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
      path: '/horizontal/ui-elements/datepicker',
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
      path: '/horizontal/ui-elements/dialog',
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
      path: '/horizontal/ui-elements/grid',
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
      path: '/horizontal/ui-elements/groups',
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
      path: '/horizontal/ui-elements/hover',
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
      path: '/horizontal/ui-elements/images',
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
      path: '/horizontal/ui-elements/input',
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
      path: '/horizontal/ui-elements/list',
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
      path: '/horizontal/ui-elements/menu',
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
      path: '/horizontal/ui-elements/progress',
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
      path: '/horizontal/ui-elements/radio',
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
      path: '/horizontal/ui-elements/select',
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
      path: '/horizontal/ui-elements/ratings',
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
      path: '/horizontal/ui-elements/slider',
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
      path: '/horizontal/ui-elements/snackbar',
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
      path: '/horizontal/ui-elements/tabs',
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
      path: '/horizontal/ui-elements/toolbar',
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
      path: '/horizontal/ui-elements/tooltip',
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
      path: '/horizontal/ui-elements/timepicker',
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
      path: '/horizontal/forms/form-validation',
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
      path: '/horizontal/forms/stepper',
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
      path: '/horizontal/charts/vue-chartjs',
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
      path: '/horizontal/charts/vue-echarts',
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
      path: '/horizontal/icons/themify',
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
      path: '/horizontal/icons/material',
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
      path: '/horizontal/tables/simple',
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
      path: '/horizontal/tables/standard',
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
      path: '/horizontal/tables/slots',
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
      path: '/horizontal/tables/selectablerows',
      meta: {
        requiresAuth: true,
        title: 'message.selectable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Selectable rows',
          },
        ],
      },
    },
    {
      component: SearchWithText,
      path: '/horizontal/tables/searchwithtext',
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
      path: '/horizontal/maps/google-maps',
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
      path: '/horizontal/maps/leaflet-maps',
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
      path: '/horizontal/users/user-profile',
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
      path: '/horizontal/users/users-list',
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
      path: '/horizontal/calendar',
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
      path: '/horizontal/editor/quilleditor',
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
      path: '/horizontal/editor/wysiwyg',
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
      path: '/horizontal/drag-drop/vue2dragula',
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
      path: '/horizontal/drag-drop/vuedraggable',
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
      path: '/horizontal/drag-drop/vuedraggableresizeable',
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
      path: '/horizontal/image-cropper',
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
      path: '/horizontal/video-player',
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
      path: '/horizontal/dropzone',
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
