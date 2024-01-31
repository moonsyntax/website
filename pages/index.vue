<template>
	<section class="py-5 lg:py-20">
		<div class="flex flex-wrap -mx-4">
			<div class="w-full lg:w-1/2 p-4"><Anim loc="/anim/home.json" /></div>

			<div class="w-full lg:w-1/2 p-4">
				<div class="flex flex-col items-stretch sm:items-start justify-center h-full">
					<h2 class="text-2xl lg:text-4xl font-bold font-heading my-5">MOON SYNTAX</h2>
					<p class="text-gray-600 text-lg lg:text-xl my-5">
						We stand as a beacon of innovation, harnessing the collective expertise of industry
						leaders to empower the digital age of finance technology. With a unique blend of
						mentorship, funding, coding prowess, and project development, we navigate the forefront of
						change.
					</p>

					<div class="leading-6 uppercase font-semibold my-5">
						<div class="relative inline-block mr-3">
							<butx textinput="Twitter" link="https://twitter.com/moonsyntax" />
						</div>
						<div class="relative inline-block mr-3">
							<butx textinput="Blog" link="https://medium.com/moonsyntax" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Moon Syntax',
		ogTitle: 'Moon Syntax',
		description: 'The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.',
		ogDescription:
			'The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.',
		ogImage: 'https://moonsyntax.com/banner.png',
		twitterImage: 'https://moonsyntax.com/banner.png',
	});
</script>
