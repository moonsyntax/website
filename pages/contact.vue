<template>
	<div>
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
			<div class="m-auto transform hover:scale-110 transition-transform duration-800">
				<lottie-player src="/astro.json" background="transparent" loop autoplay></lottie-player>
			</div>

			<div class="m-auto p-8">
				<div class="my-10">
					<p class="mb-4 text-2xl">Have questions? Email us:</p>
					<a href="mailto:moonsyntax@proton.me" class="text-blue-500 hover:underline text-xl"
						>moonsyntax@proton.me</a
					>
				</div>

				<div class="my-4">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						<a href="https://calendly.com/moonsyntax" target="_blank">Schedule a Meeting</a>
					</button>
				</div>
			</div>
		</section>
	</div>
</template>
