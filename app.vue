<template>
	<div
		:style="{ backgroundImage: `url(${wave1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
		class="min-h-screen bg-yellow-50"
	>
		<div class="m-auto p-3 max-w-7xl">
			<div class="font-bold uppercase text-gray-600 hover:text-gray-800">
				<div class="m-auto container py-6 px-3">
					<div class="flex items-center justify-center lg:text-xl space-x-4 lg:space-x-8">
						<NuxtLink v-if="route.path !== '/'" to="/" class="hover:scale-110">HOME</NuxtLink>
						<NuxtLink to="/service" class="hover:scale-110">Services</NuxtLink>
						<NuxtLink to="/about" class="hover:scale-110">About</NuxtLink>
						<a target="_blank" href="https://medium.com/moonsyntaxwork" class="hover:scale-110"
							>Work</a
						>
						<NuxtLink to="/contact" class="hover:scale-110">CONTACT</NuxtLink>
					</div>
				</div>
			</div>

			<NuxtPage />
		</div>
	</div>
</template>

<script setup>
	const route = useRoute();

	import wave1 from '@/public/blob-haikei.svg';
</script>
