<template>
	<div class="m-auto max-w-7xl p-4">
		<div class="flex flex-wrap items-center -m-6 pt-32 pb-36">
			<div class="w-full lg:w-1/2 p-6">
				<span class="text-2xl font-semibold bg-yellow-200 text-gray-600 rounded-2xl px-5 py-3 mb-10"
					>x@moonsyntax.com</span
				>

				<h1 class="my-8 text-7xl md:text-10xl xl:text-12xl text-gray-900 font-bold">MOON SYNTAX</h1>
				<p class="my-6 text-gray-600 text-xl">
					The decentralized organization that's shaking up the world of blockchain startups. With a focus on
					developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled
					support and guidance.
				</p>

				<div class="pt-3 leading-6 text-left uppercase">
					<div class="relative inline-block mr-3">
						<butx textinput="Twitter" link="https://twitter.com/moonsyntax" />
					</div>
					<div class="relative inline-block mr-3">
						<butx textinput="Blog" link="https://medium.com/moonsyntax" />
					</div>
					<div class="relative inline-block mr-3">
						<butx textinput="Our Work" link="https://medium.com/moonsyntaxwork" />
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2 p-6">
				<Anim loc="/anim/home.json" />
			</div>
		</div>
	</div>
</template>
