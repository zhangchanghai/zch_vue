export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: '登录'
    },
    component: () => import (
        /* webpackChunkName: "login" */
        "@/views/Login.vue")
  }
];