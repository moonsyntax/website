<template>
  <section class="py-5 lg:py-20">
    <div class="flex flex-wrap">
      <div class="w-full p-4 lg:w-1/2"><Anim loc="/anim/home.json" /></div>

      <div class="w-full p-4 lg:w-1/2">
        <div
          class="flex flex-col items-stretch justify-center h-full sm:items-start"
        >
          <div
            class="my-5 text-lg font-bold tracking-widest text-yellow-300 lg:text-5xl"
          >
            MOON {SYNTAX}
          </div>
          <div class="my-3 font-mono text-lg tracking-wide lg:text-xl">
            We stand as a beacon of innovation, harnessing the collective
            expertise of industry leaders to empower the digital age of finance
            technology. With a unique blend of mentorship, funding, coding
            prowess, and project development, we navigate the forefront of
            change.
          </div>

          <div class="my-3 font-semibold leading-6 uppercase">
            <div class="relative inline-block mr-3">
              <butx textinput="Twitter" link="https://twitter.com/moonsyntax" />
            </div>
            <div class="relative inline-block mr-3">
              <butx textinput="Medium" link="https://medium.com/moonsyntax" />
            </div>
            <div class="relative inline-block mr-3">
              <butx textinput="Github" link="https://github.com/moonsyntax" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Moon Syntax",
  ogTitle: "Moon Syntax",
  description:
    "The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.",
  ogDescription:
    "The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.",
  ogImage: "https://moonsyntax.com/banner.png",
  twitterImage: "https://moonsyntax.com/banner.png",
});
</script>
