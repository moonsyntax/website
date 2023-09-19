<template>
	<span>
		<span class="text-gray-300 hover:text-gray-700 font-bold">{</span>
		<span class="font-bold"> {{ textinput }}</span>
		<span class="text-gray-300 hover:text-gray-700 font-bold">}</span>
	</span>
</template>

<script>
	export default {
		name: 'Syntaxb',
		props: {
			textinput: {
				type: String,
				required: true,
			},
		},
	};
</script>
