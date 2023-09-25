<template>
	<div class="bg-yellow-50 min-h-screen">
		<div class="m-auto max-w-7xl">
			<div class="flex flex-col flex-wrap items-center justify-between md:flex-row py-8 text-2xl uppercase">
				<div class="relative flex flex-col md:flex-row">
					<NuxtLink v-if="isIndexPage" to="/" class="font-bold"><Synb textinput="🌕" /></NuxtLink>
					<NuxtLink v-if="!isIndexPage" to="/" class="font-bold"> <Synb textinput="🡸" /> </NuxtLink>
				</div>
				<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
					<nav class="flex flex-wrap items-center text-lg font-bold">
						<a href="https://blog.moonsyntax.com/" class="mr-5">BLOG</a>
						<NuxtLink to="/service" class="mr-5">Services</NuxtLink>
						<NuxtLink to="/contact" class="mr-5">CONTACT</NuxtLink>
					</nav>
				</div>
			</div>
			<Nuxt class="py-10 px-5" />
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			isIndexPage() {
				return this.$route.path === '/';
			},
		},
	};
</script>
