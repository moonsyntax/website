<template>
	<div class="p-5 m-auto my-20">
		<div class="flex flex-wrap items-center justify-between">
			<div class="w-full lg:w-2/4">
				<anim class="mx-auto" loc="/anim/contact.json" />

				<p class="text-xl">
					Well help you regarding any queries you have. We are always open to new ideas and collaborations.
				</p>
			</div>

			<div class="w-full lg:w-2/4">
				<div class="max-w-xs mx-auto mb-10">
					<span class="block mb-6 text-xl lg:text-5xl font-heading ">TEAM</span>
					<h4 class="text-xl font-semibold lg:text-3xl font-heading">info@moonsyntax.com</h4>
				</div>
				<div class="max-w-xs mx-auto">
					<span class="block mb-6 text-xl lg:text-5xl font-heading ">MANAGER</span>
					<h4 class="text-xl font-semibold lg:text-3xl font-heading">x@moonsyntax.com</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Contact Us',
		ogTitle: 'Contact Us',
		description: 'Contact us for any queries you have. We are always open to new ideas and collaborations.',
		ogDescription: 'Contact us for any queries you have. We are always open to new ideas and collaborations.',
	});
</script>
	