import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Faq from "../views/Faq.vue";
import Saloon from "../views/List.vue";
import Profile from "../views/Profile.vue";
import { getAuth } from "@firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requireAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requireAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { requireAuth: false },
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
    meta: { requireAuth: false },
  },
  {
    path: "/saloon",
    name: "Saloon",
    component: Saloon,
    meta: { requireAuth: false },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser
  if (to.meta.requireAuth) {
    if (user) {
    next()
    } else {
      next({name: "Home"})
    }
  } else {
    next()
  }
});

export default router;
