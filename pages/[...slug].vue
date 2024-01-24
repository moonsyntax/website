<script setup lang="ts">
	const router = useRouter();

	const route = router.currentRoute.value.params.slug.join('/');

	const { data } = await useAsyncData('page-data', () => queryContent(route).findOne());
</script>

<template>
	<main>
		<div class="my-20 py-10 rounded-2xl">
			<ContentRenderer :value="data">
				<div class="max-w-3xl mx-auto mb-16 text-center">
					<div class="font-medium uppercase">
						<span
							v-for="(tag, index) in data.tags"
							:key="index"
							class="px-2 py-1 m-1 bg-blue-200 rounded"
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
	</main>
</template>
