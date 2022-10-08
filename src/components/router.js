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
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
