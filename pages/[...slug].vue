<script>
	const router = useRouter();

	const route = router.currentRoute.value.params.slug.join('/');

	const { data } = await useAsyncData('page-data', () => queryContent(route).findOne());

	useSeoMeta({
		title: () => data.value?.title,
		description: () => data.value?.description,
		image: () => data.value?.image,

		ogTitle: () => data.value?.title,
		ogDescription: () => data.value?.description,
		ogImage: () => data.value?.image,

		twitterTitle: () => data.value?.title,
		twitterDescription: () => data.value?.description,
		twitterImage: () => data.value?.image,

		ogUrl: () => `https://moonsyntax.com/${route}`,
		twitterUrl: () => `https://moonsyntax.com/${route}`,

		ogType: () => 'article',
		twitterCard: () => 'summary_large_image',

		ogSiteName: () => 'Moon Syntax',
		twitterSite: () => '@moonsyntax',

		ogLocale: () => 'en_US',
	});
</script>

<template>
	<div>
		<div class="my-20 py-10 rounded-2xl">
			<ContentRenderer :value="data">
				<template #empty>
					<div class="m-auto my-20">
						<ContentList v-slot="{ list }">
							<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:items-center">
								<div v-for="article in list" :key="article._path" class="p-2">
									<a
										class="group block transform rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-2"
										:href="article._path"
									>
										<img
											class="mb-6 w-auto h-auto rounded-lg"
											:src="article.image"
										/>
										<h3 class="mb-6 text-3xl font-semibold">
											{{ article.title }}
										</h3>

										<p class="mb-6">
											{{ article.description.slice(0, 100) }}
										</p>
										<p class="font-medium uppercase">
											<span
												v-for="(
													tag, index
												) in article.tags"
												:key="index"
												class="px-2 py-1 m-1 bg-yellow-200 rounded"
											>
												{{ tag }}
											</span>
										</p>
									</a>
								</div>
							</div>
						</ContentList>
					</div>
				</template>

				<div class="max-w-3xl mx-auto mb-16 text-center">
					<div class="font-medium uppercase">
						<span
							v-for="(tag, index) in data.tags"
							:key="index"
							class="px-2 py-1 m-1 bg-yellow-200 rounded"
						>
							{{ tag }}
						</span>
					</div>

					<div class="mt-2 mb-6 text-4xl lg:text-5xl font-bold font-heading">
						{{ data.title }}
					</div>
				</div>

				<img
					:src="data.image"
					class="m-auto w-full h-auto hover:scale-110 transition delay-150 duration-300 ease-in-out"
				/>

				<div class="my-10"></div>

				<div class="my-20 bg-white max-w-4xl m-auto p-8 rounded-2xl">
					<ContentRendererMarkdown :value="data" />
				</div>
			</ContentRenderer>
		</div>
	</div>
</template>
