import { createWebHistory, createRouter } from 'vue-router'

//routes
import defaultRoutes from './default'
// import horizontalRoutes from './horizontal';
// import boxedRoutes from './boxed';
// import mini from './mini';
// import boxedV2 from './boxed-v2';

// session components
const SignUpOne = () => import('@/views/session/SignUpOne')
const LoginOne = () => import('@/views/session/LoginOne')
const LockScreen = () => import('@/views/session/LockScreen')
const ForgotPassword = () => import('@/views/session/ForgotPassword')
const ResetPassword = () => import('@/views/session/ResetPassword')

const Auth0CallBack = () => import('@/components/Auth0Callback/Auth0Callback')

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...defaultRoutes,
    // horizontalRoutes,
    // boxedRoutes,
    // mini,
    // boxedV2,
    {
      path: '/callback',
      component: Auth0CallBack,
    },
    {
      path: '/session/sign-up',
      component: SignUpOne,
      meta: {
        title: 'message.signUp',
        breadcrumb: null,
      },
    },
    {
      path: '/session/login',
      component: LoginOne,
      meta: {
        title: 'message.login',
        breadcrumb: null,
      },
    },
    {
      path: '/session/lock-screen',
      component: LockScreen,
      meta: {
        title: 'Lock Screen',
        breadcrumb: null,
      },
    },
    {
      path: '/session/forgot-password',
      component: ForgotPassword,
      meta: {
        title: 'message.forgotPassword',
        breadcrumb: null,
      },
    },
    {
      path: '/session/reset-password',
      component: ResetPassword,
      meta: {
        title: 'message.resetPassword',
        breadcrumb: null,
      },
    },  {
      path: '/:pathMatch(.*)*',
      redirect: '/admins/profile',
    },
  ],
})
