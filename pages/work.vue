<template>
	<div>
		<div class="p-4 m-auto my-20">
			<div class="flex flex-wrap items-center -m-6">
				<div class="w-full p-6 md:w-1/2">
					<div class="max-w-lg">
						<h2 class="text-3xl font-semibold uppercase mb-7 font-heading sm:text-5xl">
							Our Work
						</h2>
						<p class="text-xl ">
							We have worked with various companies and people to secure their blockchain
							projects. We recover lost funds, secure smart contracts, and provide security
							audits.
						</p>
					</div>
				</div>
				<div class="w-full p-6 md:w-1/2">
					<anim loc="/anim/work.json" />
				</div>
			</div>
		</div>

		<div class="p-4 m-auto my-20">
			<ContentList v-slot="{ list }">
				<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center">
					<div v-for="article in list" :key="article._path" class="p-2">
						<a
							class="block p-6 transition duration-500 transform rounded-lg group hover:-translate-y-2"
							:href="article._path"
						>
							<img class="w-auto h-auto mb-6 rounded-lg" :src="article.image" />
							<h3 class="mb-6 text-3xl font-semibold">
								{{ article.title }}
							</h3>

							<p class="mb-6">
								{{ article.description.slice(0, 80) }}
							</p>
							<p class="font-medium uppercase">
								<span
									v-for="(tag, index) in article.tags"
									:key="index"
									class="px-2 py-1 m-1 text-gray-700 bg-yellow-200 rounded"
								>
									{{ tag }}
								</span>
							</p>
						</a>
					</div>
				</div>
			</ContentList>
		</div>
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
