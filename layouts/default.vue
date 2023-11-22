 
<template>
	<div>
		<Navbar :isIndexPage="isIndexPage" />

		<Nuxt  />
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