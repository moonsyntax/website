<template>
	<main>
		<div class="bg-white max-w-4xl my-20 py-20 rounded-2xl">
			<ContentRenderer :value="data">
				<h1>{{ data.title }}</h1>
				<ContentRendererMarkdown :value="data" />
			</ContentRenderer>
		</div>
	</main>
</template>

<script setup lang="ts">
	const router = useRouter();

	const route = router.currentRoute.value.params.slug.join('/');

	const { data } = await useAsyncData('page-data', () => queryContent(route).findOne());
</script>
