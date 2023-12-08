<template>
  <div>
    <section class="relative pt-24 pb-32 overflow-hidden">
      <div class="container mx-auto px-4 mb-12">
        <h2 class="mb-6 max-w-xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
          OUR WORK
        </h2>
        <p class="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">
          Transforming industries through innovative tech solutions. Pioneering
          ventures as VC & computer developers. Explore our groundbreaking
          portfolio.
        </p>

        <div class="flex flex-wrap -m-8">
          <div class="w-full md:w-1/3 p-8" v-for="(post, index) in posts" :key="index">
            <a class="group" :href="post.link">
              <div class="mb-9 overflow-hidden rounded-2xl">
                <img class="transform hover:scale-110 w-full transition ease-out duration-500" :src="post.image"
                  :alt="post.title" />
              </div>
              <h3 class="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                {{ post.title.slice(0, 50) }}
              </h3>
              <p class="mb-5 text-gray-600 text-base">
                {{ post.description.slice(0, 100) }}
              </p>
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
          title: "Recovered 2.1 BTC from a Damaged Device",
          description: "Our client was a user of the Samurai wallet on Android, known for its security and privacy features. However, even the most secure wallet couldn’t prevent a devastating hardware failure. The client’s Android device suffered a complete breakdown, rendering both the display and the motherboard unusable. He remembered 12 out of the 13 words of their wallet passphrase, with the elusive 13th word being the “BIP passphrase.”",
          image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WP18v7ohzluqY01_JoPqhQ.png",
          link: "https://medium.com/moonsyntax/recovered-2-1-btc-from-a-damaged-device-ba145e5f3fe9",
        },
        {
          title: "How We Rescued a Lost Crypto Seed",
          description: "A client entrusted us with their crypto seed phrase, inscribed on paper using a gel point pen. Unfortunately, moisture caused the ink to expand, blurring the vital 12 words, putting access to their funds in jeopardy.",
          image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U2gAKQKwc93TmU9xcgP7jQ.png",
          link: "https://medium.com/moonsyntax/how-we-restored-lost-crypto-seed-a14c6077942f",
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
