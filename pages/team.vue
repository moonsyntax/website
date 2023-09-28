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
						<p class="transition-opacity duration-300 mt-3">
							{{ team.superpower }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				theme: [
					'bg-red-100',
					'bg-blue-100',
					'bg-green-100',
					'bg-yellow-100',
					'bg-purple-100',
					'bg-blue-100',
					'bg-red-100',
					'bg-blue-100',
					'bg-green-100',
					'bg-yellow-100',
					'bg-purple-100',
					'bg-blue-100',
				],
				teams: [
					{
						name: 'Alex Johnson',
						title: 'Chief Technology Officer',
						superpower: 'Ability to code at lightning speed and solve complex technical problems effortlessly',
						pic: 'alex', // Add the picture name here
					},
					{
						name: 'Sarah Lee',
						title: 'Head of User Experience Design',
						superpower: 'Ability to create intuitive and visually stunning user interfaces that keep users engaged',
						pic: 'sarah', // Add the picture name here
					},
					{
						name: 'David Kim',
						title: 'Lead Data Scientist',
						superpower: 'Ability to analyze large datasets and extract valuable insights that drive business decisions',
						pic: 'david', // Add the picture name here
					},
					{
						name: 'Emily Chen',
						title: 'Director of Cybersecurity',
						superpower: "Ability to identify and neutralize cyber threats before they cause any damage to the company's systems",
						pic: 'emily', // Add the picture name here
					},
					{
						name: 'Michael Brown',
						title: 'Senior Software Engineer',
						superpower: "Ability to write clean, efficient, and scalable code that powers the company's products and services",
						pic: 'michael', // Add the picture name here
					},
					{
						name: 'Eric G',
						title: 'Project Manager',
						superpower: 'Ability to coordinate multiple teams and ensure projects are delivered on time, within budget, and with high quality',
						pic: 'eric', // Add the picture name here
					},
				],
			};
		},
		mounted() {
			this.teams.sort(() => Math.random() - 0.5);
		},
	};
</script>
