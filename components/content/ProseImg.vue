<template>
	<div class="py-10 m-auto">
		<img :src="src" class="w-full h-auto hover:scale-110 transition delay-700 duration-300 ease-in-out" />
	</div>
</template>

,
<script>
	export default {
		props: {
			src: {
				type: String,
				required: true,
			},
		},
	};
</script>
