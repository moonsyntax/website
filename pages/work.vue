<template>
	<div>
		<div class="m-auto p-4 my-20">
			<div class="flex flex-wrap items-center -m-6">
				<div class="w-full md:w-1/2 p-6">
					<div class="max-w-lg">
						<h2 class="mb-7 font-heading font-semibold text-3xl sm:text-5xl text-gray-900 uppercase">
							Our Work
						</h2>
						<p class="text-xl text-gray-900">
							We have worked with various companies and people to secure their blockchain
							projects. We recover lost funds, secure smart contracts, and provide security
							audits.
						</p>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-6">
					<anim loc="/anim/work.json" />
				</div>
			</div>
		</div>

		<div class="m-auto my-14">
			<ContentList v-slot="{ list }">
				<div class="grid grid-cols-2 gap-10 lg:items-center">
					<div v-for="article in list" :key="article._path" class="p-2">
						<a
							class="group block transform rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-2"
							:href="article._path"
						>
							<img class="mb-6 w-auto h-auto rounded-lg" :src="article.image" />
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
