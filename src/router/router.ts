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
    meta: { title: "home", requireAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "login", requireAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "register", requireAuth: false },
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
    meta: { title: "faq", requireAuth: false },
  },
  {
    path: "/saloon",
    name: "Saloon",
    component: Saloon,
    meta: { title: "saloon", requireAuth: false },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { title: "profile", requireAuth: true },
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
