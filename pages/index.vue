<template>
	<div class="flex flex-wrap items-center">
		<div class="w-full lg:w-1/2">
			<Anim loc="/anim/home.json" />
		</div>

		<div class="w-full lg:w-1/2">
			<h1 class="my-6 text-2xl lg:text-6xl font-bold text-gray-800">MOON { SYNTAX }</h1>
			<p class="my-6 text-lg lg:text-2xl tracking-wide">
				The decentralized organization that's shaking up the world of blockchain startups. With a focus on developing,
				managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.
			</p>

			<div class="leading-6 uppercase font-semibold">
				<div class="relative inline-block mr-3">
					<butx textinput="Twitter" link="https://twitter.com/moonsyntax" />
				</div>
				<div class="relative inline-block mr-3">
					<butx textinput="Blog" link="https://medium.com/moonsyntax" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
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
