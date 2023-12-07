
<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <div class="bg-black text-white">
      <div class="m-auto container p-6">
        <div class="flex items-center justify-center uppercase text-base lg:text-xl space-x-4 lg:space-x-8 font-bold">
          <NuxtLink v-if="route.path !== '/'" to="/" class="hover:scale-110 ">HOME</NuxtLink>
          <NuxtLink to="/service" class="hover:scale-110 ">Services</NuxtLink>
          <NuxtLink to="/work" class="hover:scale-110 ">work</NuxtLink>
          <NuxtLink to="/about" class="hover:scale-110 ">about</NuxtLink>
          <NuxtLink to="/contact" class="hover:scale-110 ">CONTACT</NuxtLink>
        </div>
      </div>
    </div>

    <NuxtPage />
  </div>
</template>

