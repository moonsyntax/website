<template>
  <div class="min-h-screen text-white bg-black">
    <div class="container p-5 m-auto font-bold tracking-widest uppercase">
      <div class="flex items-center justify-center space-x-4 lg:space-x-6">
        <NuxtLink v-if="route.path !== '/'" to="/" class="navlinks"
          >HOME</NuxtLink
        >
        <NuxtLink to="/service" class="navlinks">Services</NuxtLink>
        <NuxtLink to="/work" class="navlinks">Work</NuxtLink>
        <NuxtLink to="/contact" class="navlinks">CONTACT</NuxtLink>
      </div>
    </div>

    <div class="max-w-6xl p-5 m-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.navlinks {
  @apply hover:scale-110 hover:underline hover:underline-offset-8 hover:text-yellow-400;
}
</style>
