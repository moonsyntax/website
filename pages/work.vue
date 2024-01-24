<template>
	<div class="container mx-auto py-20">
		<ContentList v-slot="{ list }" class="-m-4 flex flex-wrap">
			<div v-for="article in list" :key="article._path">
				<div class="w-full p-4 lg:w-1/2">
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
