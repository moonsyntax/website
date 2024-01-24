<template>
	<main>
		<div class="my-20 py-20 rounded-2xl">
			<ContentRenderer :value="data">
				<div class="max-w-2xl mx-auto mb-16 text-center">
					<p class="font-medium uppercase">
						<span
							v-for="(tag, index) in data.tags"
							:key="index"
							class="px-2 py-1 m-1 bg-blue-200 rounded"
						>
							{{ tag }}
						</span>
					</p>

					<h2 class="mt-2 mb-6 text-4xl lg:text-5xl font-bold font-heading">
						{{ data.title }}
					</h2>
				</div>

				<img :src="data.image" class="mb-6 rounded-lg" />

				<div class="my-20"></div>

				<ContentRendererMarkdown :value="data" class="bg-white" />
			</ContentRenderer>
		</div>
	</main>
</template>

<script setup lang="ts">
	const router = useRouter();

	const route = router.currentRoute.value.params.slug.join('/');

	const { data } = await useAsyncData('page-data', () => queryContent(route).findOne());
</script>
