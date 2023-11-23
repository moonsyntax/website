<template>
  <div>
    <section class="overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6 pt-32 pb-36">
          <div class="w-full lg:w-1/2 p-6">
            <div class="lg:max-w-xl">
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
