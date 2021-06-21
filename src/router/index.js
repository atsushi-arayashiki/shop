import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import Thanks from "../views/Thanks.vue";
import Done from "../views/Done.vue";
import Shop from "../views/Shop.vue";
import store from "../store/index";
import Mypage from "../views/Mypage.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "User",
    component: User,
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: Thanks,
  },
  {
    path: "/done",
    name: "Done",
    component: Done,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shops",
    name: "Shop",
    component: Shop,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/detail/:shop_id",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
