<template>
  <div class="">
    <section class="py-44 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="max-w-lg">
              <p
                class="mb-9 max-w-max font-heading text-xs uppercase font-semibold tracking-px"
              >
                OUR TEAM
              </p>
              <h2
                class="mb-7 font-heading font-semibold text-6xl sm:text-7xl text-gray-900"
              >
                Moonsyntax fuels innovation.
              </h2>
              <p class="text-xl text-gray-900">
                Our team is made up of experts in their respective fields, each
                bringing a unique perspective and skill set to the table.
                Together, we work towards achieving our mission of advancing the
                world through cutting-edge technology and strategic investments.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <Animation loc="team" />
          </div>
        </div>
      </div>
    </section>

    <div class="py-10 m-auto container">
      <section class="grid w-full grid-cols-1 gap-10 md:grid-cols-4">
        <div v-for="(team, index) of teams" :key="index">
          <div
            class="flex flex-col col-span-1 hover:col-span-2 items-center justify-center shadow-xl py-10 px-10 transform duration-500 hover:-translate-y-5 cursor-pointer rounded-md bg-yellow-50"
          >
            <div class="relative p-5">
              <div
                class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full"
                :class="theme[index]"
              ></div>
              <img
                class="relative z-10 w-full rounded-full"
                v-bind:src="'/team/' + team.pic + '.png'"
              />
            </div>
            <div class="mt-3 py-5 text-center">
              <h3 class="font-medium text-xl">{{ team.name }}</h3>
              <p>{ {{ team.title }} }</p>
              <p class="transition-opacity duration-300 mt-2 text-sm">
                {{ team.superpower }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Moonsyntax - Team",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Moonsyntax - Team",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Moonsyntax - Team",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Our team is made up of experts in their respective fields, each bringing a unique perspective and skill set to the table. Together, we work towards achieving our mission of advancing the world through cutting-edge technology and strategic investments.",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Our team is made up of experts in their respective fields, each bringing a unique perspective and skill set to the table. Together, we work towards achieving our mission of advancing the world through cutting-edge technology and strategic investments.",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Our team is made up of experts in their respective fields, each bringing a unique perspective and skill set to the table. Together, we work towards achieving our mission of advancing the world through cutting-edge technology and strategic investments.",
        },
      ],
    };
  },
  data() {
    return {
      theme: [
        "bg-red-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-purple-100",
        "bg-blue-100",
        "bg-red-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-purple-100",
        "bg-blue-100",
      ],
      teams: [
        {
          name: "Alex Johnson",
          title: "Chief Technology Officer",
          superpower:
            "Ability to code at lightning speed and solve complex technical problems effortlessly",
          pic: "alex", // Add the picture name here
        },
        {
          name: "Sarah Lee",
          title: "Head of User Experience Design",
          superpower:
            "Ability to create intuitive and visually stunning user interfaces that keep users engaged",
          pic: "sarah", // Add the picture name here
        },
        {
          name: "David Kim",
          title: "Lead Data Scientist",
          superpower:
            "Ability to analyze large datasets and extract valuable insights that drive business decisions",
          pic: "david", // Add the picture name here
        },
        {
          name: "Emily Chen",
          title: "Director of Cybersecurity",
          superpower:
            "Ability to identify and neutralize cyber threats before they cause any damage to the company's systems",
          pic: "emily", // Add the picture name here
        },
        {
          name: "Michael Brown",
          title: "Senior Software Engineer",
          superpower:
            "Ability to write clean, efficient, and scalable code that powers the company's products and services",
          pic: "michael", // Add the picture name here
        },
        {
          name: "Eric G",
          title: "Project Manager",
          superpower:
            "Ability to coordinate multiple teams and ensure projects are delivered on time, within budget, and with high quality",
          pic: "eric", // Add the picture name here
        },
      ],
    };
  },
  mounted() {
    this.teams.sort(() => Math.random() - 0.5);
  },
};
</script>
