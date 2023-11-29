<template>
  <div>
    <section class="overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6 pt-32 pb-36">
          <div class="w-full lg:w-1/2 p-6">
            <div class="lg:max-w-xl">
              <div
                v-if="randomPost"
                class="mb-6 inline-block rounded-full bg-green-100 px-2 py-1 font-semibold"
              >
                <div class="-m-1 flex flex-wrap items-center">
                  <a class="text-sm" target="_blank" :href="randomPost.link[0]"
                    >👋 {{ randomPost.title[0] }}</a
                  >
                </div>
              </div>

              <h1
                class="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-gray-900 font-bold"
              >
                MOON SYNTAX
              </h1>
              <p class="mb-9 text-gray-600 text-lg">
                The decentralized organization that's shaking up the world of
                blockchain startups. With a focus on developing, managing, and
                funding cutting-edge projects, our team of experts delivers
                unparalleled support and guidance.
              </p>

              <div
                class="pt-3 space-y-3 space-y-4 leading-6 text-left xl:pt-3 xl:space-y-5 uppercase"
              >
                <div class="relative inline-block mr-3">
                  <a href="https://twitter.com/moonsyntax">
                    <Buttonx textinput="Twitter" />
                  </a>
                </div>
                <div class="relative inline-block mr-3">
                  <a href="https://medium.com/moonsyntax">
                    <Buttonx textinput="Medium" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-6">
            <Animation loc="home" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import xml2js from "xml2js";

export default {
  data() {
    return {
      randomPost: null,
    };
  },

  async mounted() {
    const parser = new xml2js.Parser();
    const xml = await axios.get("feed.xml");

    setInterval(() => {
      parser.parseString(xml.data, (err, result) => {
        const posts = result.rss.channel[0].item;
        this.randomPost = posts[Math.floor(Math.random() * posts.length)] || { title: ["✅✅✅"], link: [""] }};
      });
    }, 12000);
  },
};
</script>
