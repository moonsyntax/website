<template>
	<div class="container mx-auto py-20">
		<ContentList v-slot="{ list }" class="-m-4 flex flex-wrap">
			<div v-for="article in list" :key="article._path">
				<div class="w-full p-4 md:w-1/2 lg:w-1/3">
					<a
						class="group block transform rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-2"
						href="#"
					>
						<img
							class="mb-6 w-full rounded-lg"
							src="https://shuffle.dev/basko-assets/images/blog/workflow.jpg"
							alt=""
						/>
						<h3 class="mb-6 text-3xl font-semibold tracking-tight group-hover:underline">
							{{ article.title }}
						</h3>
						<p class="font-medium">
							<span>Lifestyle</span>
							<span class="text-gray-400">/</span>
							<span>{{ article._path }}</span>
						</p>
					</a>
				</div>
			</div>
		</ContentList>
	</div>
</template>
