import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "@firebase/auth";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/layouts.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: { requireAuth: false },
      },
      {
        path: "/faq",
        name: "Faq",
        component: () => import("../views/Faq.vue"),
        meta: { requireAuth: false },
      },
      {
        path: "/saloon",
        name: "Saloon",
        component: () => import("../views/List.vue"),
        meta: { requireAuth: false },
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { requireAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: { requireAuth: false },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPass.vue"),
    meta: { requireAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: import("../views/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (to.meta.requireAuth) {
    if (user) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
