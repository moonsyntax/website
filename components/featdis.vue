<template>
  <div class="max-w-sm mt-10">
    <span class="block text-4xl font-bold text-yellow-500 mb-4">{{ id }}</span>
    <h4 class="text-2xl font-bold text-white mb-4">{{ title }}</h4>
    <p class="text-gray-500">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
