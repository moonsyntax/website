<template>
	<div class="">
		<div class="m-auto p-4 my-20">
			<div class="flex flex-wrap items-center -m-6">
				<div class="w-full md:w-1/2 p-6">
					<div class="max-w-lg">
						<h2 class="mb-7 font-heading font-semibold text-3xl sm:text-5xl  uppercase">
							Innovating with Moonsyntax
						</h2>
						<p class="text-xl ">
							Our team comprises industry experts, each contributing a distinct perspective
							and skill set. Together, we drive our mission forward— propelling the world
							through pioneering technology and strategic investments.
						</p>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-6">
					<anim loc="/anim/team.json" />
				</div>
			</div>
		</div>

		<div class="p-4 m-auto my-20">
			<section class="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
				<div v-for="(team, index) of teams" :key="index">
					<div
						class="flex flex-col col-span-1 hover:col-span-2 items-center justify-center py-10 px-10 transform duration-500 hover:scale-110 rounded-2xl ">
						<img class="w-full" v-bind:src="'/team/' + team.pic + '.png'" />

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

		<div class="p-4 m-auto my-20">
			<div class="flex flex-wrap items-center -m-8">
				<div class="w-full md:w-1/2 p-8">
					<anim loc="/anim/circ.json" />
				</div>
				<div class="w-full md:w-1/2 p-8">
					<div class="md:max-w-md">
						<div class="flex flex-wrap -m-6">
							<div class="w-auto p-6">
								<h3 class="mb-4 text-3xl font-semibold tracking-tighter" style="letter-spacing: -0.5px">
									Revolutionary Work Culture
								</h3>
								<p class="tracking-tight">
									At MoonSyntax, we don't operate like traditional companies.
									We prioritize freedom for our team members. Every individual
									has the autonomy to lead, choose tasks they resonate with,
									and set their flexible working hours and days.
								</p>
							</div>
							<div class="w-auto p-6">
								<h3 class="mb-4 text-3xl font-semibold tracking-tighter" style="letter-spacing: -0.5px">
									Perks That Matter
								</h3>
								<p class="tracking-tight">
									We believe in a comfortable work environment. Our benefits
									include unlimited holidays, paid leaves, comprehensive
									medical insurance, and a food allowance. We're committed to
									fostering an atmosphere where well-being leads to
									exceptional results.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'About Us',
	ogTitle: 'About Us',
	description: 'Our team comprises industry experts, each contributing a distinct perspective and skill set. Together, we drive our mission forward— propelling the world through pioneering technology and strategic investments.',
	ogDescription:
		'Our team comprises industry experts, each contributing a distinct perspective and skill set. Together, we drive our mission forward— propelling the world through pioneering technology and strategic investments.',
});

import { ref, onMounted } from 'vue';

const teams = ref([
	{
		name: 'Alex Johnson',
		title: 'Chief Technology Officer',
		superpower: 'Ability to code at lightning speed and solve complex technical problems effortlessly',
		pic: 'alex',
	},
	{
		name: 'Sarah Lee',
		title: 'Head of User Experience Design',
		superpower: 'Ability to create intuitive and visually stunning user interfaces that keep users engaged',
		pic: 'sarah', 
	},
	{
		name: 'David Kim',
		title: 'Lead Data Scientist',
		superpower: 'Ability to analyze large datasets and extract valuable insights that drive business decisions',
		pic: 'david', 
	},
	{
		name: 'Emily Chen',
		title: 'Director of Cybersecurity',
		superpower: 'Ability to identify and neutralize cyber threats before they cause any damage',
		pic: 'emily',
	},
	{
		name: 'Michael Brown',
		title: 'Senior Software Engineer',
		superpower: "Ability to write clean, efficient, and scalable code that powers the company's products and services",
		pic: 'michael', 
	},
	{
		name: 'Eric G',
		title: 'Project Manager',
		superpower: 'Ability to coordinate multiple teams and ensure projects are delivered high quality',
		pic: 'eric', 
	},
]);

onMounted(() => {
	teams.value.sort(() => Math.random() - 0.5);
});
</script>
