import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Главная страница" },
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("@/components/AboutUs.vue"),
    meta: { title: "О нас" },
  },
  {
    path: "/itemDetails/:id/",
    name: "itemDetails",
    component: () => import("@/views/ItemDetails.vue"),
    meta: { title: "Параметризация" },
    props: true,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title || "Справочник";
  next();
});

export default router;
