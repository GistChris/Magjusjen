<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useUser } from "./stores/userStore";
import { useRouter } from "vue-router";
import { RouterView } from "vue-router";
const userStore = useUser();
const router = useRouter();
const signOut = async () => {
  await userStore.signOut();
  router.push("/signin");
};
</script>

<template>
  <div class="d-flex flex-column app-container">
    <div class="blur">
    <!-- <Header :is-authenticated="userStore.isAuthenticated" @sign-out="signOut"></Header> -->
    <router-view class="flex-fill" />
    <!-- <footer>
      <Footer></Footer>
    </footer> -->
  </div>
  </div>
</template>
<style scoped>
.app-container {
  min-height: 100vh;
  /* background-color: rgb(149, 173, 218); */
 
  background-image: url(./assets/background.jpg);
  background-size: cover;
 
}
.blur {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px); 
  height: 100vh;
  width: 100%;
}
/* .blur{
  backdrop-filter: blur(20px) saturate(120%) contrast(200%);
} */
</style>
