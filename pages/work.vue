<template>
  <div>
    <section class="relative pt-24 pb-32 overflow-hidden">
      <div class="container mx-auto px-4 mb-12">
        <h2
          class="mb-6 max-w-xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900"
        >
          OUR WORK
        </h2>
        <p class="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">
          Transforming industries through innovative tech solutions. Pioneering
          ventures as VC & computer developers. Explore our groundbreaking
          portfolio.
        </p>

        <div class="flex flex-wrap -m-8">
          <div
            class="w-full md:w-1/3 p-8"
            v-for="(post, index) in posts"
            :key="index"
          >
            <a class="group" :href="post.link">
              <div class="mb-9 overflow-hidden rounded-2xl">
                <img
                  class="transform hover:scale-110 w-full transition ease-out duration-500"
                  :src="post.image"
                  :alt="post.title"
                />
              </div>
              <h3
                class="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline"
              >
                {{ post.title }}
              </h3>
              <p class="mb-5 text-gray-600 text-base">
                {{ post.description }}
              </p>
            </a>
            <a
              class="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
              :href="post.link"
            >
              <p class="mb-1">Learn more</p>
              <div
                class="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"
              ></div>
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "Post title",
          description: "Post description",
          image:
            "https://shuffle.dev/gradia-assets/images/features/experts.png",
          link: "#",
        },
        {
          title: "Post title",
          description: "Post description",
          image:
            "https://shuffle.dev/gradia-assets/images/features/insights.png",
          link: "#",
        },
        {
          title: "Post title",
          description: "Post description",
          image:
            "https://shuffle.dev/gradia-assets/images/features/results.png",
          link: "#",
        },
      ],
    };
  },
 
};
</script>
