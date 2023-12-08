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
    <Menu  text-link1="Events" text-link2="NewsLetter" text-link3="Sponsors" text-link4="About us" text-link5="Gallery" text-link6="Testimonials"></Menu>
    <RouterLink to="/shop">
      <Titre text="Movie Prodactions" size="84px" style="color: red;"></Titre>
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
  <div class="event-wrapper">
    <div class="event-container">
      <div class="event-imag"><p>Imag</p></div>
      <div class="event-description"><p>Description</p></div>
    </div>
    <div class="event-container">
      <div class="event-imag"><p>Imag</p></div>
      <div class="event-description"><p>Description</p></div>
    </div>
  </div>
</template>
<style scoped>
.event-wrapper {
  display: flex;
  justify-content: center;
}
p {
  font-size: xx-large;
  color: none;
}
.event-container {
  display: flex;
  width: max-content;
  flex-direction: row;
  background-color: white;
  opacity: 0.8;
  padding: 60px;
  gap: 20px;
  border-radius: 15px;
  margin: 40px;
}
.event-imag {
  width: 250px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(88, 132, 221);
  opacity: 0.8;
  text-align: center;
  justify-content: center;
  color: red;
}
.event-description {
  width: 250px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(88, 132, 221);
  text-align: center;
  justify-content: center;
  color: red;
}
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
