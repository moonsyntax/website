<template>
	<div class="container mx-auto py-20">
		<ContentList v-slot="{ list }">
			<div class="flex flex-col sm:flex-row gap-10 lg:items-center">
				<div v-for="article in list" :key="article._path" class="w-full lg:w-1/2 p-5">
					<a
						class="group block transform rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-2"
						:href="article._path"
					>
						<img class="mb-6 w-full rounded-lg" :src="article.image" />
						<h3 class="mb-6 text-3xl font-semibold">
							{{ article.title }}
						</h3>

						<p class="mb-6">
							{{ article.description.slice(0, 100) }}
						</p>
						<p class="font-medium uppercase">
							<span
								v-for="(tag, index) in article.tags"
								:key="index"
								class="px-2 py-1 m-1 bg-blue-200 rounded"
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
<script setup lang="ts">
	useSeoMeta({
		title: 'Our Work',
		ogTitle: 'Our Work',
		description: "Moon Syntax offers a diverse range of specialized services to bolster your blockchain project's success.",
		ogDescription: "Moon Syntax offers a diverse range of specialized services to bolster your blockchain project's success.",
	});
</script>
