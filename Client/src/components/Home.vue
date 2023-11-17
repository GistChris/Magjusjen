<script setup lang="ts">
// ### Imports ###
import { ref, computed, toRefs, watch, onMounted } from "vue";
import Product from "./Products/Product.vue";
import Pagination from "./Widgets/Pagination.vue";
import Titre from "./Widgets/Titre.vue";
import Animation from "./Widgets/Animation.vue";
import Menu from "./Widgets/HamburgerMenu.vue";
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
  <Animation></Animation>
  <!-- <div class="home-wrapper"> -->
  <!-- <div class="titre"> -->
  <!-- <Titre :text="viewMode === 'default' ? 'Produits' : 'Offres'" size="64px"></Titre> -->
  <!-- <Titre text="M A G J U S J E N  " size="34px"></Titre> -->

  <!-- <Titre text="I N T E R T A I N M E N T" size="34px"></Titre> -->
  <!-- </div> -->
  <!-- </div> -->
  <Menu></Menu>
</template>

<style scoped>
/*  */
/* page styling */

/*  */
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
