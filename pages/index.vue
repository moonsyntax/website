<template>
  <div class="m-auto container max-w-5xl">
    <p class="text-left text-3xl lg:text-6xl leading-tight pt-4">
      MOON <span class="text-gray-400 font-light">SYNATX</span>
    </p>
    <p class="my-8 text-lg text-left">
      The decentralized organization that's shaking up the world of blockchain
      startups. With a focus on developing, managing, and funding cutting-edge
      projects, our team of experts delivers unparalleled support and guidance
      to help drive innovation and growth in this exciting field.
    </p>

    <div
      class="pt-3 space-y-3 space-y-4 leading-6 text-left xl:pt-8 xl:space-y-5 uppercase"
    >
      <nuxt-link to="/contact" class="relative inline-block mr-3">
        <Button textinput="CONTACT" />
      </nuxt-link>

      <nuxt-link to="/service" class="relative inline-block mr-3">
        <Button textinput="SERVICES" />
      </nuxt-link>

      <nuxt-link to="/project" class="relative inline-block mr-3">
        <Button textinput="PROJECTS" />
      </nuxt-link>

      <div class="relative inline-block mr-3">
        <a href="https://t.me/moonsyntax">
          <Button textinput="Telegram"
        /></a>
      </div>

      <div class="relative inline-block mr-3">
        <a href="https://twitter.com/moonsyntax">
          <Button textinput="Twitter"
        /></a>
      </div>
    </div>
  </div>
</template>
