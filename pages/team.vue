 <template>
  <div>
      <div class="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        <div v-for="(team, index) of teams" :key="index">
          <div
            class="flex flex-col col-span-1 hover:col-span-2 items-center justify-center shadow-xl py-10 px-10 transform duration-500 hover:-translate-y-5 cursor-pointer rounded-md bg-white"
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
              <p>( {{ team.title }} )</p>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>



