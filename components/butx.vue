<template>
	<div>
		<a :href="link">
			<div
				class="relative inline-block px-5 py-2 text-sm font-bold text-center text-black no-underline whitespace-no-wrap align-middle bg-white border-2 border-gray-900 border-solid rounded-md shadow-xs cursor-pointer select-none hover:bg-black hover:shadow-xs hover:text-white focus:shadow-xs transform transition-transform duration-300 hover:scale-110"
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
