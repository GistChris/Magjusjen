<script setup lang="ts">
// ### Imports ###
import { ref, computed, toRefs, watch, onMounted } from "vue";
import Product from "./Products/Product.vue";
import Pagination from "./Widgets/Pagination.vue";
import Titre from "./Widgets/Titre.vue";
import Animation from "./Widgets/Animation.vue";
import Menu from "./Widgets/HamburgerMenu.vue";
// import Map from "./Widgets/GoogleMaps.vue";
import ItemsPerPageSelector from "./Widgets/ItemsPerPageSelector.vue";
import { locale } from "../data/config.ts";
import Filters from "./Filters/Filters.vue";
import ProductControls from "./Widgets/ProductControls.vue";

// ### Stores ###
import { useProducts } from "../stores/productsStore";
import { usePaginationStore } from "../stores/paginationStore";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();
const productsStore = useProducts();
const paginationStore = usePaginationStore();

paginationStore.initWatchers(); //watchers pour la pagination
// ### references et valeurs computed ###
const filterText = ref("");
const filterCriteria = ref("name");
let animate = ref(false);

let viewMode = ref("default"); // default, onsale

const products = computed(() => {
  if (viewMode.value != "onsale") {
    return productsStore.getFiltered;
  } else {
    return productsStore.getFilteredSale;
  }
});

const filteredProducts = computed(() => {
  if (!filterText.value) return products.value;

  return products.value.filter((product) => {
    const value = product[filterCriteria.value as keyof typeof product];
    if (typeof value === "string") {
      return value.toLowerCase().includes(filterText.value.toLowerCase());
    } else if (typeof value === "number") {
      return value.toString().includes(filterText.value);
    }
    return false;
  });
});

let paginatedProducts = computed(() => {
  let currentFilteredProducts = filteredProducts.value;

  const start = (paginationStore.currentPage - 1) * paginationStore.itemsPerPage;
  const end = start + paginationStore.itemsPerPage;
  return currentFilteredProducts.slice(start, end);
});

// ### Methodes ###
const handleSort = ({ criteria, order }: { criteria: string; order: string }) => {
  productsStore.handleSort({ criteria: criteria as any, order: order as any });
};

const toggleView = () => {
  if (viewMode.value === "default") {
    viewMode.value = "onsale";
  } else {
    viewMode.value = "default";
  }
};

// ### Watchers et Lifecycle ###
watch(
  () => paginationStore.currentPage,
  () => {
    animate.value = true;
    setTimeout(() => {
      animate.value = false;
    }, 300);
  }
);

onMounted(() => {
  productsStore.fetchProducts(); // au moment du montage du composant on va chercher les produits dans le store pinia qui vas les chercher dans le json
  paginationStore.setTotalItems(productsStore.products.length); // on set le total d'items dans le store pinia "paginationStore"
});
</script>

<template>
  <div class="home">
     <video autoplay loop muted class="bgvideo" id="bgvideo">
   <source src="/src/assets/video/mariage1.mp4" type="video/mp4">
  </video>
  <Animation
    frame-text1="Bienvenue au"
    frame-text2="Maison Principale!"
    frame-text3="A Votre"
    frame-text4="Service!"
    titre-text1="Maison"
    titre-text2=" Principale"
    titre-text3=" avec l,Amour!"
    size-text1="45"
    size-text2="45"
    size-text3="45"
    size-text4="45"
    titre-circle="Berry"
    size-circle="12"
  ></Animation>
  <!-- <div class="home-wrapper"> -->
  <!-- <div class="titre"> -->
  <!-- <Titre :text="viewMode === 'default' ? 'Produits' : 'Offres'" size="64px"></Titre> -->
  <!-- <Titre text="M A G J U S J E N  " size="34px"></Titre> -->

  <!-- <Titre text="I N T E R T A I N M E N T" size="34px"></Titre> -->
  <!-- </div> -->
  <!-- </div> -->
  <Menu text-link1="Events" text-link2="NewsLetter" text-link3="Sponsors" text-link4="About us" text-link5="Gallery" text-link6="Testimonials"></Menu>
</div>
<!-- <a id="map" mapdata-fancybox="" data-options="{&quot;iframe&quot; : {&quot;css&quot; : {&quot;width&quot; : &quot;80%&quot;, &quot;height&quot; : &quot;80%&quot;}}}" href="https://www.google.com/maps/search/?api=1&amp;query=centurylink+field" class="btn btn-primary">Open Modal Map</a>Fancybox for googlemaps -->
<!-- <Map></Map> -->
</template>

<style scoped>
.home{
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
.home-wrapper {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}
.titre {
  display: flex;
  gap: 30px;
}

.itemsPP {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: auto;
}
.shop-wrapper {
  display: flex;
  width: 100%;
  background-color: var(--bg-color-bg);
}

.div1 {
  flex-direction: column;
  flex: 1;
}
.div2 {
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align the items to the left */
  width: 85%;
}

.product-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center; /* Align the text to the left within the product-box */
}

.titre {
  position: relative;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animation */
@keyframes fadeInOutIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.1;
  }
  40% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.fade {
  animation: fadeInOutIn 0.3s;
}
</style>
