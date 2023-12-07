<template>
  <div>
    <img
      class="m-auto transform transition ease-in-out duration-500 hover:scale-110 w-full h-full"
      :src="imgsrc" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: {
      type: String,
      required: true,
    },

  },
};
</script>
