<script setup lang="ts">
import { RouterLink } from "vue-router";
import Titre from "./Widgets/Titre.vue";
import Button from "../components/Widgets/Button.vue";
import Menu from "./Widgets/HamburgerMenu.vue";
</script>
<template>
  <div class="wrong-url">
    <Menu text-link1="Events" text-link2="NewsLetter"  text-link4="About us"></Menu>
    <RouterLink to="/shop">
      <Titre text="Sponsors" size="84px" style="color: red;"></Titre>
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
.wrong-url{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
