<template>
	<div class="min-h-screen bg-black text-white">
		<div class="m-auto container font-bold tracking-widest uppercase py-8 px-8 ">
			<div class="flex items-center justify-center space-x-4 lg:space-x-6 ">
				<NuxtLink v-if="route.path !== '/'" to="/" class="hover:scale-110 hover:underline hover:underline-offset-8"
					>HOME</NuxtLink
				>
				<NuxtLink to="/service" class="hover:scale-110 hover:underline hover:underline-offset-8">Services</NuxtLink>
				<NuxtLink to="/work" class="hover:scale-110 hover:underline hover:underline-offset-8">Work</NuxtLink>
				<NuxtLink to="/about" class="hover:scale-110 hover:underline hover:underline-offset-8">About</NuxtLink>
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
</script>
