import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/Settings.vue")
    },
    {
      path: "/article",
      name: "article",
      component: () => import("./views/ArticleView.vue")
    },
    {
      path: "/food",
      name: "food",
      component: () => import("./views/Food.vue")
    }
  ]
});
