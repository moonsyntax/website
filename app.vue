<template>
	<div :style="{ backgroundImage: `url(${wave1})`, backgroundSize: 'cover' }" class="min-h-screen">
		<div class="m-auto container font-bold tracking-widest uppercase text-gray-800 py-8 px-8">
			<div class="flex items-center justify-end space-x-4 lg:space-x-6">
				<NuxtLink v-if="route.path !== '/'" to="/" class="hover:scale-110 hover:underline hover:underline-offset-8"
					>HOME</NuxtLink
				>
				<NuxtLink to="/service" class="hover:scale-110 hover:underline hover:underline-offset-8">Services</NuxtLink>
				<NuxtLink to="/about" class="hover:scale-110 hover:underline hover:underline-offset-8">About</NuxtLink>
				<NuxtLink to="/work" class="hover:scale-110 hover:underline hover:underline-offset-8">Work</NuxtLink>
				<NuxtLink to="/contact" class="hover:scale-110 hover:underline hover:underline-offset-8">CONTACT</NuxtLink>
			</div>
		</div>

		<div class="m-auto p-5 max-w-7xl">
			<NuxtPage />
		</div>
	</div>
</template>

<script setup>
	const route = useRoute();

	import wave1 from '/blob-haikei.svg';
</script>
