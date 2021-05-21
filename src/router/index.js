import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import Thanks from "../views/Thanks.vue";
import Done from "../views/Done.vue";
import Shop from "../views/Shop.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
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
  },
  {
    path: "/",
    name: "Shop",
    component: Shop,
  }

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
