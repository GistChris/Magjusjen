<script setup lang="ts">
import { RouterLink } from "vue-router";
import Titre from "../Widgets/Titre.vue";
import Button from "../Widgets/Button.vue";
import Menu from "../Widgets/HamburgerMenu.vue";
</script>
<template>
  <div class="events">
    <video autoplay loop muted class="bgvideo" id="bgvideo">
   <!-- <source src="./maison-principale.mp4" type="video/mp4"> -->
   <source src="/src/assets/video/maison-principale.mp4" type="video/mp4">
   <!-- <source src="@/assets/video/wedding2.mp4" type="video/mp4"> -->
  </video>
    <Menu text-link2="NewsLetter" text-link3="Sponsors" text-link4="About us" text-link5="Gallery"></Menu>
    <RouterLink to="/shop">
      <Titre text="Events" size="84px" style="color: red;"></Titre>
    </RouterLink>
 
  <RouterLink to="/home">
      <Button
        buttonText="Retour home"
        buttonColor="var(--button-color)"
        buttonHoverColor="var(--accent-color)"
        style="font-size: large; width: 300px"
      >
      </Button
    ></RouterLink>
  </div>
</template>
<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: none;
  gap: 40px;
  background: url('video.png');
  background-size: cover;
}
.bgvideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -9999;
}
</style>
