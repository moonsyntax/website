<template>
	<div>
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
			<div class="m-auto transform hover:scale-110 transition-transform duration-800">
				<lottie-player src="/astro.json" background="transparent" loop autoplay></lottie-player>
			</div>

			<div class="m-auto p-8">
                <div class="my-5">
					<p class="mt-4 mb-4">--- Telegram Group</p>
					<a href="https://t.me/moonsyntax" class="text-blue-500 hover:underline text-2xl"
						>@moonsyntax</a
					>
				</div>

				<div class="my-5">
					<p class="mt-4 mb-4">--- Email Manager</p>
					<a href="mailto:moonsyntax@proton.me" class="text-blue-500 hover:underline text-2xl"
						>moonsyntax@proton.me</a
					>
				</div>

				<div class="my-5">
					<p class="mt-4 mb-4">--- Email Organisation</p>
					<a class="text-blue-500 hover:underline text-2xl">{{ email }}@moonsyntax.com</a>
				</div>
			</div>
		</section>
	</div>
</template>


<script>
	import axios from 'axios';

	export default {
		data() {
			return { email: 'mail' };
		},

		async mounted() {
			const { data } = await axios.get('https://ipapi.co/json/');

			console.log(data);

			const { city } = data;

			if (city) {
				this.email = city.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') || "talk";
			}
		},
	};
</script>