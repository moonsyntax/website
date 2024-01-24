<template>
	<main>
		<div class="my-20 py-10 rounded-2xl">
			<ContentRenderer :value="data">
				<div class="max-w-2xl mx-auto mb-16 text-center">
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

				<img :src="data.image" />

				<div class="my-20"></div>

				<div class="my-20 bg-white max-w-4xl m-auto p-8 rounded-2xl">
					<ContentRendererMarkdown :value="data" class="" />
				</div>
			</ContentRenderer>
		</div>
	</main>
</template>

<script setup lang="ts">
	const router = useRouter();

	const route = router.currentRoute.value.params.slug.join('/');

	const { data } = await useAsyncData('page-data', () => queryContent(route).findOne());
</script>

<style>
	p {
		@apply my-2 text-lg leading-relaxed;
	}

	h1 {
		@apply my-8 text-5xl font-bold;
	}

	h2 {
		@apply my-6 text-4xl font-bold;
	}

	h3 {
		@apply my-4 text-3xl font-bold;
	}

	h4 {
		@apply my-2 text-2xl font-bold;
	}

	img {
		@apply my-10 py-10 rounded-lg w-full h-auto;
	}
</style>
