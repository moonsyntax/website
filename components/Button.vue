<template>
  <div>
    <div
      class="w-full h-full bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"
    ></div>

    <div
      class="relative inline-block px-5 py-2 text-lg font-bold text-center text-gray-900 no-underline whitespace-no-wrap align-middle bg-white border-2 border-gray-900 border-solid rounded-md shadow-xs cursor-pointer select-none hover:bg-white hover:shadow-xs hover:text-gray-900 focus:shadow-xs"
    >
      {{ textinput }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    textinput: {
      type: String,
      required: true,
    },
  },
}
</script>
