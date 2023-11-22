<template>
  <div class="m-auto container">
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div class="m-auto lg:p-0 p-8">
        <div class="text-left text-3xl lg:text-6xl leading-tight pt-4 font-semibold">
          MOON { SYNTAX }
        </div>

        <div class="my-8 text-2xl text-left">
          The decentralized organization that's shaking up the world of
          blockchain startups. With a focus on developing, managing, and funding
          cutting-edge projects, our team of experts delivers unparalleled
          support and guidance.
        </div>

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

      <div class="m-auto lg:block hidden">
        <Animation loc="rocket.json" />
      </div>
    </section>
  </div>
</template>
