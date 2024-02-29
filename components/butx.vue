<template>
	<div>
		<a :href="link">
			<div
				class="tracking-wider mr-3 px-4 py-2 text-lg font-bold text-center text-black no-underline  align-middle bg-yellow-300 rounded-lg cursor-pointer hover:bg-black hover:text-white transform transition-transform duration-300 hover:scale-110"
			>
				{{ textinput }}
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			textinput: {
				type: String,
				required: true,
			},
			link: {
				type: String,
				required: true,
			},
		},
	};
</script>
