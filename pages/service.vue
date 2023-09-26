<template>
	<div>
		<section class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
			<div class="col-span-1" v-for="(article, index) in articles" :key="index">
				<a
					target="_blank"
					:href="'https://blog.moonsyntax.com/tags/' + article.tag + '/'"
					class="group relative block h-96 w-96"
				>
					<span class="absolute inset-0 border-2 border-dashed border-gray-300"> </span>
					<div
						class="relative flex h-full transform items-end border-2 border-gray-300 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
					>
						<div class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
							<h2 class="mt-4 text-2xl font-medium">
								{{ article.heading }}
							</h2>
						</div>
						<div
							class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
						>
							<h3 class="mt-4 text-2xl font-medium">
								{{ article.heading }}
							</h3>
							<p class="mt-4">{{ article.description }}</p>
						</div>
					</div>
				</a>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [
					{
						tag: 'report',
						heading: 'Hacking / RE',
						description: 'Compromising digital devices, networks.',
					},
					{
						tag: 'report',
						heading: 'Project Audit',
						description: 'Evaluates projects based on specific criteria.',
					},
					{
						tag: 'report',
						heading: 'Crypto Recovery',
						description: 'Recover lost cryptocurrency with expert assistance.',
					},
					{
						tag: 'report',
						heading: 'Blockchain Forensic',
						description: 'Trace and investigate blockchain transactions.',
					},
					{
						tag: 'report',
						heading: 'Project Advisory',
						description: 'Expert guidance for maximizing project potential.',
					},
					{
						tag: 'report',
						heading: 'Web 3.0 Development',
						description: 'Decentralized websites and applications.',
					},
					{
						tag: 'report',
						heading: 'Cryptocurrency Consultaion',
						description: 'Experienced consultaion for your project.',
					},
					{
						tag: 'report',
						heading: 'Smart Contract Development',
						description: 'Efficient, Secure Smart Contract Solutions.',
					},
					{
						tag: 'report',
						heading: 'Crypto Insurance',
						description: 'Insurance for Digital Wealth.',
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
