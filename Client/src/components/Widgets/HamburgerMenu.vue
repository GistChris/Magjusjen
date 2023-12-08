<script setup lang="ts">
const props = defineProps<{
  textLink1?: string;
  textLink2?: string;
  textLink3?: string;
  textLink4?: string;
  textLink5?: string;
  textLink6?: string;
  // buttonText?: string;
  // buttonColor?: string;
  // buttonHoverColor?: string;
  // imageSrc?: string;
  // iconId?: string;
  // iconSize?: string;
}>();
// const computedIconSize = props.iconSize || "2rem";
</script>
<template>
  <input type="checkbox" id="navi-toggle" class="checkbox" />
  <label for="navi-toggle" class="button">
    <span class="icon">&nbsp;</span>
  </label>
  <div class="background">&nbsp;</div>

  <!-- nav -->
  <nav class="nav">
    <ul class="list">
      <RouterLink to="/events">
        <li class="item">
          <a class="link">{{ textLink1 }} </a>
        </li>
      </RouterLink>
      <RouterLink to="/newsletter">
        <li class="item">
          <a class="link">{{ textLink2 }} </a>
        </li>
      </RouterLink>
      <RouterLink to="/sponsors">
        <li class="item">
          <a class="link"> {{ textLink3 }} </a>
        </li>
      </RouterLink>
      <RouterLink to="/aboutus">
        <li class="item">
          <a class="link"> {{ textLink4 }} </a>
        </li>
      </RouterLink>
      <RouterLink to="/gallery">
        <li class="item">
          <a class="link"> {{ textLink5 }} </a>
        </li>
      </RouterLink>
      <RouterLink to="/testimonials">
        <li class="item">
          <a class="link"> {{ textLink6 }} </a>
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>
<style scoped>
/* body {
  background: linear-gradient(90deg, #7bed9f, #3498db);
  background: linear-gradient(90deg, #7bed9f, #3498db);
} */

/* section {
  max-width: 900px;
  margin: 0 auto;
} */

/* section h1 {
  font-size: 46px;
  text-align: center;
} */

/* section p {
  font-size: 26px;
  text-align: center;
} */

/* hamburger */
.checkbox {
  display: none;
  /* gap:60px; */
}

.button {
  position: relative;
  /* background-color: white; */
  height: 5rem;
  width: 5rem;
  /* height: 3rem;
  width: 3rem;  */
  border-radius: 50%;
  position: fixed;
  top: 5vh;
  right: 5vw;
  z-index: 2000;
  /* correction */
  /* box-shadow: 0 1rem 3rem black; */
  text-align: center;
  cursor: pointer;
}

.backgrounds {
  /* height: 0.1rem;
  width: 0.1rem;
  position: fixed; */
  /* top: 5.5vh; */
  /* right: 5.5vw; */
  /* height: 1rem; */
  /* correction */
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: fixed;
  top: 5.5vh;
  right: 5.5vw;
  /* background-image: radial-gradient(green, black); */
  /* correction background */
  /* background-image: radial-gradient(rgba(255, 255, 255, 0.2), black); */

  /* background-image: radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.288)); */
  /* backdrop-filter: blur(4px); */

  z-index: 1000;
  /* correction */
  /* transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); */
  transition: transform 0.8s cubic-bezier(0.46, 0, 0.07, 0.5);
}

.nav {
  height: 100vh;
  position: fixed;
  top: 0;
  /* correction */
  /* right: -60vw; */
  /* correction */
  right: 120vw;
  z-index: 1500;
  opacity: 0;
  width: 0;
  /* transition: all 0.8s; */
  transition: all 1.8s;
}

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  /* width: 100%;
  height: 100%; */
  padding: 100px;
  border-radius: 25px;
  /* background-image: radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.288)); */
  background-image: radial-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));
  backdrop-filter: blur(4px);
}

.item {
  margin: 1rem;
  font-weight: 100;
  text-shadow: 0 0 8px #464545;
  color: transparent;
  /* font-size: 36px; */
  font-size: 3vw;
}

.link:link,
.link:visited {
  display: inline-block;
  font-size: 3rem;
  /* font-size: 3px; */
  font-weight: 300;
  padding: 1rem 2rem;
  color: white;
  /* color:red; */
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
  background-size: 220%;
  /* background-size: 10%; */
  /* transition: all 0.4s; */
  transition: all 0.8s;
  /* backdrop-filter: blur(800px);  */
}

.link:hover,
.link:active {
  text-shadow: 0 0 8px #000;
  transition: all 0.6s;
  /* color: lightgreen; */
  color: lightgray;

  font-size: 3.8rem;
  cursor: pointer;
}

/* functionality */
.checkbox:checked ~ .background {
  /* transform: scale(80); */
  transform: scale(80);
}
.checkbox:checked ~ .nav {
  opacity: 1;
  width: 100%;
  right: 0;
}

/*  */
/* styling hamb ICON */
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon,
.icon::before,
.icon::after {
  width: 3rem;
  height: 2px;
  background-color: gray;
  display: inline-block;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  left: 0;
  /* transition: all 0.2s; */
  transition: all 0.8s;
}

.icon::before {
  /* correction */
  /* top: -0.8rem; */
}
.icon::after {
  /* correction */
  /* top: 0.8rem; */
}

.button:hover icon:before {
  top: -1rem;
}
.button:hover icon::after {
  top: 1rem;
}

.checkbox:checked + .button .icon {
  background-color: transparent;
}

.checkbox:checked + .button .icon::before {
  top: 0;
  transform: rotate(135deg);
  /* transform: rotate(235deg); */
}
.checkbox:checked + .button .icon::after {
  top: 0;
  transform: rotate(-135deg);
}
</style>
