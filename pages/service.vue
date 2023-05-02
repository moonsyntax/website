<template>
  <div class="m-auto container">
    <p class="pt-4 mx-auto mb-4 text-2xl leading-tight text-left">SERVICES</p>
    <section
      class="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-start"
    >
      <article
        class="w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
      >
        <div class="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96">
          <lottie-player
            src="hack.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="p-8 mb-10 mt-2">
          <h2 class="text-3xl mt-2">Hacking / RE</h2>
          <p class="text-xbase mt-5 text-gray-400 leading-relaxed">
            Hacking refers to activities that seek to compromise digital
            devices, such as computers, smartphones, tablets, and even entire
            networks.
          </p>
        </div>
      </article>
      <article
        class="w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
      >
        <div class="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96">
          <lottie-player
            src="web3.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="p-8 mb-10 mt-2">
          <h2 class="text-3xl mt-2">Web 3.0 Development</h2>
          <p class="text-xbase mt-5 text-gray-400 leading-relaxed">
            In a nutshell, what makes Web 3.0 so different from Web 2.0 is the
            absence of a centralized server.
          </p>
        </div>
      </article>
      <article
        class="w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
      >
        <div class="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96">
          <lottie-player
            src="audit.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="p-8 mb-10 mt-2">
          <h2 class="text-3xl mt-2">Project Audit</h2>
          <p class="text-xbase mt-5 text-gray-400 leading-relaxed">
            A project management audit is a formal review that seeks to evaluate
            a given project based on specific criteria.
          </p>
        </div>
      </article>
    </section>
  </div>
</template>
