<template>
	<div class="m-auto max-w-7xl p-4">
		<div class="flex flex-wrap items-center -m-6 pt-32 pb-36">
			<div class="w-full lg:w-1/2 p-6">
				<span class="text-sm font-semibold bg-yellow-200 text-gray-600 rounded-2xl px-4 py-2">x@moonsyntax.com</span>

				<h1 class="my-6 text-3xl xl:text-7xl text-gray-800 font-bold">MOON SYNTAX</h1>
				<p class="my-6 text-xl lg:text-2xl tracking-wide">
					The decentralized organization that's shaking up the world of blockchain startups. With a focus on
					developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled
					support and guidance.
				</p>

				<div class="pt-5 leading-6 uppercase font-semibold">
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
