import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile.vue"),
  },
  {
    path: "/Addproduct",
    name: "addproduct",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProduct.vue"),
  },
  {
    path: "/checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/checkout.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
