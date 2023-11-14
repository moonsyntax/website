 
<template>
	<div>
		<Navbar :isIndexPage="isIndexPage" />

		<div class="m-auto max-w-6xl">
			<Nuxt class="px-8 py-8" />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
 
export default {
	components: {
		Navbar
 	},
	computed: {
		isIndexPage() {
			return this.$route.path === '/';
		},
	},
};
</script>