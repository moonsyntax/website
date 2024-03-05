<template>
  <div class="min-h-screen text-white bg-black">
    <div class="p-4 uppercase bg-yellow-200 hover:bg-yellow-300 text-slate-900">
      <div class="container m-auto font-bold tracking-widest">
        <div class="flex items-center justify-center space-x-4 lg:space-x-6">
          <NuxtLink v-if="route.path !== '/'" to="/" class="navlinks"
            >HOME</NuxtLink
          >
          <NuxtLink to="/service" class="navlinks">Services</NuxtLink>
          <NuxtLink to="/work" class="navlinks">Work</NuxtLink>
          <NuxtLink to="/contact" class="navlinks">CONTACT</NuxtLink>
        </div>
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
  @apply hover:scale-110 hover:underline hover:underline-offset-8;
}
</style>
