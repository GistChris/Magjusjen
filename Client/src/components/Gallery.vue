<script setup lang="ts">
import { RouterLink } from "vue-router";
import Titre from "./Widgets/Titre.vue";
import Button from "../components/Widgets/Button.vue";
import Menu from "./Widgets/HamburgerMenu.vue";
</script>
<template>
  <div class="wrong-url">
    <Menu text-link1="Events" text-link2="NewsLetter" text-link3="Sponsors" text-link4="About us"></Menu>
    <Titre text="Gallery" size="84px" style="color: red"></Titre>
    <!-- <RouterLink to="/shop"> -->
    <!-- <Titre text="Gallery" size="84px" style="color: red"></Titre> -->
    <!-- </RouterLink> -->

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
  <div class="wrapper">
    <div class="cssSlider">
      <ul class="slides">
        <li id="slide1">
          <img
            src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?auto=format&fit=crop&w=840&q=60"
            alt=""
          />
        </li>
        <li id="slide2">
          <img
            src="https://images.unsplash.com/photo-1433256392503-913cee5877e3?auto=format&fit=crop&w=840&q=60"
            alt=""
          />
        </li>
        <li id="slide3">
          <img
            src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?auto=format&fit=crop&w=840&q=60"
            alt=""
          />
        </li>
        <li id="slide4">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=840&q=60"
            alt=""
          />
        </li>
        <li id="slide5">
          <img
            id=""
            src="https://images.unsplash.com/photo-1453284441168-8780c9f52097?auto=format&fit=crop&w=840&q=60"
            alt=""
          />
        </li>
      </ul>

      <ul class="thumbnails">
        <li>
          <a href="#slide1"
            ><img src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide2"
            ><img src="https://images.unsplash.com/photo-1433256392503-913cee5877e3?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide3"
            ><img src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide4"
            ><img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide5"
            ><img src="https://images.unsplash.com/photo-1453284441168-8780c9f52097?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide1"
            ><img src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide2"
            ><img src="https://images.unsplash.com/photo-1433256392503-913cee5877e3?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide3"
            ><img src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide4"
            ><img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
        <li>
          <a href="#slide5"
            ><img src="https://images.unsplash.com/photo-1453284441168-8780c9f52097?auto=format&fit=crop&w=840&q=60"
          /></a>
        </li>
      </ul>
    </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aqua;
}

.slides {
  /* width: 1300px;
  height:1300px ; */
  background-color: blue;
  /* height: max-content; */
  /* width: max-content; */
}
.cssSlider {
  /* display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  display: block;
  position: relative;
  /* position: fixed; */
  width: 1050px;
  
  /* height: 100%; */
  /* height: 2000px;  */
  overflow: hidden;
}
.cssSlider .slides {
  overflow: hidden;
  overflow: hidden;
  width: 100%;
  height: 70vmin;
  margin: 0;
  padding: 0;
  list-style: none;
}
.cssSlider .slides > li {
  width: 100%;
  height: 70vmin;
  position: absolute;
  z-index: 1;
  overflow: hidden;
}
.cssSlider .slides > li > img {
  border-radius: 10px;
  width: 100%;
  height: auto;
}

.cssSlider .slides > li:first-child:not(:target) {
  z-index: 1;
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
}

.cssSlider .thumbnails {
  display: block;
  position: relative;
  padding: 0;
  margin: 0px;
  list-style: none;
}
.cssSlider .thumbnails > li {
  float: left;
  width: 10%;
}
.cssSlider .thumbnails > li > a {
  display: block;
}
.cssSlider .thumbnails > li > a > img {
  border-radius: 10px;
  width: 100%;
  height: auto;
  height: 10%;
}

.cssSlider .slides li:target {
  z-index: 3;
  -webkit-animation: slide 1s 1;
}
.cssSlider .slides li:not(:target) {
  -webkit-animation: hidden 1s 1;
}
@-webkit-keyframes slide {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@keyframes slide {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-webkit-keyframes hidden {
  0% {
    z-index: 2;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    z-index: 2;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes hidden {
  0% {
    z-index: 2;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    z-index: 2;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
