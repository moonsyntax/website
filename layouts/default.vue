<template>
	<div>
		<div class="bg-yellow-200">
			<div class="m-auto max-w-6xl">
				<div class="flex items-center justify-center h-10 py-10 uppercase lg:text-lg font-bold">
					<div class="flex items-center space-x-4">
						<NuxtLink v-if="!isIndexPage" to="/" class="">
							<Synb textinput=" 🡸 " />
						</NuxtLink>
						<a href="https://blog.moonsyntax.com/">BLOG</a>
						<NuxtLink to="/team">Team</NuxtLink>
						<NuxtLink to="/service">Services</NuxtLink>
						<NuxtLink to="/contact">CONTACT</NuxtLink>
					</div>
				</div>
			</div>
		</div>

		<div class="">
			<div class="m-auto max-w-6xl">
				<Nuxt class="px-5 py-20" />
			</div>
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
