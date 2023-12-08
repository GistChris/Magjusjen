import { createRouter, createWebHistory } from "vue-router";
import { useUser } from "../src/stores/userStore";
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "@/shared/guards";
import NotFound from "./components/NotFind.vue";
import SendingPage from "./components/Widgets/SendingPage.vue";
import Shop from "./components/Shop.vue";
import Home from "./components/Home.vue";
import Events from "./components/Events/EventsList.vue";
import Sponsors from "./components/Sponsors.vue";
import AboutUs from "./components/AboutUs.vue";
import Gallery from "./components/Gallery.vue";
import Newsletter from "./components/Newsletter.vue";
import Offres from "./components/Offres.vue";
import Share from "./components/Share.vue";
import Panier from "./components/Panier.vue";
import SelectedProduct from "./components/Products/SelectedProduct.vue";
import Invoice from "@/components/Users/Invoice.vue";
import UpdateAddressVue from "@/components/Users/UpdateAddress.vue";
import UpdateCommandeVue from "@/components/Users/Commande.vue";
import UpdatePaymentVue from "@/components/Users/UpdatePayment.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home.vue"),
    },
    // {
    //   path: "/",
    //   component: () => import("@/components/Shop.vue"),
    // },
    //////////////////////////////////////////
    { path: "/home", component: Home },
    { path: "/events", component: Events },
    { path: "/gallery", component: Gallery },
    { path: "/sponsors", component: Sponsors },
    { path: "/newsletter", component: Newsletter },
    { path: "/aboutus", component: AboutUs },
    ///////////////////////////////////////////////
    { path: "/shop", component: Shop },
    { path: "/send", component: SendingPage },
    // { path: "/product/:sku", component: SelectedProduct, props: true },
    // { path: "/share", component: Share },
    // { path: "/address/:index", component: UpdateAddressVue, props: true },
    // { path: "/payment/:index", component: UpdatePaymentVue, props: true },
    // { path: "/commande/:index", component: UpdateCommandeVue, props: true },

    {
      path: "/signin",
      beforeEnter: [isNotAuthenticatedGuard],
      component: () => import("@/components/SignIn.vue"),
    },
    { path: "/signup", beforeEnter: [isNotAuthenticatedGuard], component: () => import("@/components/SignUp.vue") },
    { path: "/invoice", beforeEnter: [isAuthenticatedGuard], component: Invoice },
    { path: "/cart", beforeEnter: [isAuthenticatedGuard], component: Panier },
    {
      path: "/newaddress",
      beforeEnter: [isAuthenticatedGuard],
      component: () => import("@/components/Users/AddAddress.vue"),
    },
    {
      path: "/order",
      beforeEnter: [isAuthenticatedGuard],
      component: () => import("@/components/Users/AddCommande.vue"),
    },
    {
      path: "/newcard",
      beforeEnter: [isAuthenticatedGuard],
      component: () => import("@/components/Users/AddPayment.vue"),
    },
    {
      path: "/profile",
      beforeEnter: [isAuthenticatedGuard],
      component: () => import("@/components/Profile.vue"),
    },
    { path: "/offres", component: Offres },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(async () => {
  const userStore = useUser();
  if (userStore.currentUser == undefined) {
    await userStore.fetchCurrentUser();
  }
});
router.afterEach((to, from) => {
  // console.log("After global changed TO=", to.fullPath, "FROM=", from.fullPath);
});
export default router;
