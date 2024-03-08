<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-black"
  >
    <div
      v-for="star in stars"
      :key="star.id"
      :style="{ top: star.top, left: star.left }"
      class="star"
    ></div>

    <div
      class="flex items-center justify-center p-5 space-x-3 text-lg font-bold text-yellow-300 uppercase lg:text-xl lg:space-x-7"
    >
      <NuxtLink v-if="route.path !== '/'" to="/" class="navlinks"
        >HOME</NuxtLink
      >
      <NuxtLink to="/service" class="navlinks">Services</NuxtLink>
      <NuxtLink to="/work" class="navlinks">Work</NuxtLink>
      <NuxtLink to="/contact" class="navlinks">CONTACT</NuxtLink>
    </div>

    <div class="container p-5 m-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();
const stars = ref([]);

onMounted(() => {
  generateStars();
});

function generateStars() {
  for (let i = 0; i < 99; i++) {
    stars.value.push({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    });
  }
}
</script>

<style scoped>
.navlinks {
  @apply hover:scale-110 hover:underline hover:underline-offset-8 hover:text-yellow-400;
}

.star {
  position: absolute;
  background-color: white;
  width: 2px;
  height: 2px;
  opacity: 1;
  animation: shooting-star 25s linear infinite;
}

@keyframes shooting-star {
  to {
    transform: translateY(100vh) rotate(45deg);
  }
}
</style>
