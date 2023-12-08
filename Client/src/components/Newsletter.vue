<script setup lang="ts">
import { RouterLink } from "vue-router";
import Titre from "./Widgets/Titre.vue";
import Button from "../components/Widgets/Button.vue";
import Menu from "./Widgets/HamburgerMenu.vue";
</script>
<template>
  <div class="wrong-url">
    <Menu text-link1="Events" text-link3="Sponsors" text-link4="About us" text-link5="Gallery" ></Menu>
    <RouterLink to="/shop">
      <Titre text="Newsletter" size="84px" style="color: red"></Titre>
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
  <div class="articles">
    <!-- <iframe class="frame" src="https://themontrealeronline.com/2023/04/gabriella-gullotti-managing-maison-principale-montreals-premiere-luxury-event-space/" width="650" height="260" scrolling="auto"> </iframe> -->
    <iframe class="frame" src="https://www.cbc.ca/life/culture/sort-of-bilal-baig-on-ending-on-a-high-note-1.7029553" width="600" height="260" scrolling="auto"> </iframe>
   
  </div>
  
</template>
<style scoped>
.wrong-url {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.articles {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  /* background-color: aqua; */
}
.frame {
  width: 650;
  height: 300px;
  display: flex;
  border-radius: 10px;
  /* background-color: aqua; */
}
</style>
