<template>
	<div>
		<div class="py-10">
			<section class="grid grid-cols-1 lg:grid-cols-2 gap-2">
				<div class="m-auto lg:p-0 p-8">
					<div class="text-left text-4xl leading-tight pt-4 font-semibold">
						OUR
						<Synb textinput="WORK" />
					</div>

					<div class="my-8 text-2xl text-left">
						Our services are designed to help you navigate the complex world of IT and venture capital
						with ease. Just as astronauts rely on advanced technology to explore space, we provide
						cutting-edge solutions to help your business thrive.
					</div>
				</div>

				<div class="m-auto lg:block hidden">
					<Animation loc="gof.json" />
				</div>
			</section>
		</div>

		<div class="py-10">

			<div v-for="(article, index) in randomizedArticles" :key="index">
				<img :src="article.image" alt="image"
					class="w-full h-full object-cover transition transform hover:scale-110" />
			</div>

		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [
				{
					image: 'https://ipfs.io/ipfs/QmP9Hyi3B3nr1kcGzE3mWykBHA5xwA2H1AHhKqW2bhwrqY',
				},

			],
		};
	},
	computed: {
		randomizedArticles() {
			const copiedArticles = [...this.articles];

			for (let i = copiedArticles.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[copiedArticles[i], copiedArticles[j]] = [copiedArticles[j], copiedArticles[i]];
			}

			return copiedArticles;
		},
	},
	mounted() {
		this.articles = this.randomizedArticles;
	},
};
</script>
