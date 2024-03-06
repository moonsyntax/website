<template>
  <div class="min-h-screen text-white bg-black">
    <div class="p-3 font-bold uppercase bg-yellow-300 lg:p-5 text-slate-900 lg:text-xl">
        <div class="flex items-center justify-center space-x-3 lg:space-x-7">
          <NuxtLink v-if="route.path !== '/'" to="/" class="navlinks"
            >HOME</NuxtLink
          >
          <NuxtLink to="/service" class="navlinks">Services</NuxtLink>
          <NuxtLink to="/work" class="navlinks">Work</NuxtLink>
          <NuxtLink to="/contact" class="navlinks">CONTACT</NuxtLink>
        </div>
    </div>

    <div class="p-5 m-auto max-w-7xl">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.navlinks {
  @apply hover:scale-110 hover:underline hover:underline-offset-8;
}
</style>
