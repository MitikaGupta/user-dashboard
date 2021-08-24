import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/UserList",
      name: "UserList",
      component: () => import("./components/UserList")
    },
    {
      path: "/UserDetails",
      name: "UserDetails",
      component: () => import("./components/UserDetails")
    }
  ]
});
