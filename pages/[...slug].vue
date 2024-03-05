<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

useSeoMeta({
	title: () => post.value?.title,
	description: () => post.value?.description,
	image: () => post.value?.image,

	ogTitle: () => post.value?.title,
	ogDescription: () => post.value?.description,
	ogImage: () => post.value?.image,

	twitterTitle: () => post.value?.title,
	twitterDescription: () => post.value?.description,
	twitterImage: () => post.value?.image,

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
		<div class="py-10 my-20 rounded-2xl">
			<ContentRenderer :value="post">
				<template #empty>
					<div class="m-auto my-18">
						<ContentList v-slot="{ list }">
							<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center">
								<div v-for="article in list" :key="article._path" class="p-2">
									<a class="block p-6 transition duration-500 transform rounded-lg group hover:-translate-y-2"
										:href="article._path">
										<img class="w-auto h-auto mb-6 rounded-lg" :src="article.image" />
										<h3 class="mb-6 text-3xl font-semibold">
											{{ article.title }}
										</h3>

										<p class="mb-6">
											{{ article.description.slice(0, 150) }}
										</p>
										<p class="font-medium uppercase">
											<span v-for="(tag, index) in article.tags" :key="index"
												class="px-2 py-1 m-1 text-gray-700 bg-yellow-200 rounded">
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
						<span v-for="(tag, index) in post.tags" :key="index" class="px-2 py-2 m-1 text-yellow-500">
							{{ tag }}
						</span>
					</div>

					<div class="mt-2 mb-6 text-4xl font-bold lg:text-5xl font-heading">
						{{ post.title }}
					</div>
				</div>

				<img :src="post.image"
					class="w-full h-auto m-auto transition duration-300 ease-in-out delay-150 hover:scale-110" />

				<div class="my-10"></div>

				<div class="max-w-4xl p-8 m-auto my-20 rounded-2xl">
					<ContentRendererMarkdown :value="post" />
				</div>

				<div class="my-10"></div>
			</ContentRenderer>
		</div>
	</div>
</template>
