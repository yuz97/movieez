import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: HomeView,
   },
   {
      path: "/all-popular",
      name: "popular",

      component: function () {
         return import("../views/popular/AllPopular.vue");
      },
   },
   {
      path: "/movie/:id",
      name: "movie-detail",
      component: () => {
         return import("../views/popular/MovieDetail.vue");
      },
   },
   {
      path: "/playing",
      name: "now-playing",
      component: () => {
         return import("../views/nowplaying/AllMovie.vue");
      },
   },
   {
      path: "/playing/:id",
      name: "playing-detail",
      component: () => {
         return import("../views/nowplaying/NowplayingDetail.vue");
      },
   },
   {
      path: "/tv",
      name: "tv",
      component: () => {
         return import("../views/tv/TvAll.vue");
      },
   },
   {
      path: "/tv/:id",
      name: "tv-detail",
      component: () => {
         return import("../views/tv/TvDetail.vue");
      },
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   linkExactActiveClass: "bg-pink-600 rounded-full px-4 py-2",
   routes,
});

export default router;
