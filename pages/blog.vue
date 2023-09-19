<template>
	<div>
		<h2 class="text-left lg:text-center text-4xl lg:text-6xl leading-tight mb-8 text-green-600 font-bold px-8"></h2>
		<div class="text-center text-4xl leading-tight pt-4 font-semibold">RECENT FROM <Synb textinput="BLOG" /></div>
		<div class="my-10"></div>

		<div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
			<div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4" v-for="post of mediumData">
				<a :href="post.link" target="_blank" rel="noopener noreferrer">
					<div class="block flex flex-row items-start">
						<img
							class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
							:src="post.thumbnail"
						/>
					</div>
					<h2 class="text-lg font-bold sm:text-xl md:text-2xl line-clamp-2">
						{{ post.title }}
					</h2>
					<p class="text-sm text-gray-500" v-html="post.content" />
					<p class="pt-2 text-xs font-medium text-gray-600">
						<span class="mx-1">{{ post.pubDate }}</span>
					</p>
				</a>
			</div>
		</div>
		<div class="flex flex-row justify-center underline">
			<a href="https://medium.com/moonsyntax" target="_blank" rel="noopener noreferrer">
				<Buttonx textinput="VIEW ALL POSTS" />
			</a>
		</div>
	</div>
</template>

<script>
	const medium = require('@giuseppecampanelli/medium-api');
	const dayjs = require('dayjs');
	const relativeTime = require('dayjs/plugin/relativeTime');

	dayjs.extend(relativeTime);

	export default {
		name: 'Medi',
		data: () => ({
			mediumData: [],
		}),
		async created() {
			this.mediumData = await medium.publication.getRecentPosts('moonsyntax');
			this.mediumData = this.mediumData.map((post) => {
				post.content = post.content.split('<p>')[1].slice(0, 100);
				// date ago
				post.pubDate = dayjs(post.pubDate).fromNow();
				return post;
			});
		},
	};
</script>
