<template>
	<div>
		<div class="p-5 my-20 m-auto">
			<div class="flex flex-wrap lg:items-center -m-8">
				<div class="w-full md:w-1/2 p-8">
					<div class="md:max-w-xl">
						<h2 class="font-heading mb-6 text-6xl tracking-tighter uppercase">
							Transforming Blockchain Innovation
						</h2>
						<p class="mb-20 tracking-tight">
							Moon Syntax empowers blockchain startups with a suite of specialized services
							designed to accelerate growth and success.
						</p>
						<div class="flex flex-wrap -m-6">
							<div class="w-full md:w-1/2 p-6">
								<h3 class="mb-2 text-xl font-semibold tracking-tight">
									Funding Support
								</h3>
								<p class="tracking-tight">
									Moon Syntax offers strategic financial backing to fuel the
									vision and development of promising projects. Our investment
									philosophy aligns with your long-term success.
								</p>
							</div>
							<div class="w-full md:w-1/2 p-6">
								<h3 class="mb-2 text-xl font-semibold tracking-tight">
									Expert Mentorship
								</h3>
								<p class="tracking-tight">
									Gain access to a team of seasoned developers and venture
									capitalists. Our experts provide invaluable guidance and
									technical expertise to refine and optimize your project.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-8">
					<div class="max-w-max mx-auto">
						<Anim
							class="transform hover:-translate-y-2 transition duration-500"
							loc="/anim/service-mo.json"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="py-5 lg:py-20">
			<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				<div v-for="service in services" class="col-span-1">
					<a href="" class="group relative block h-96">
						<span class="absolute inset-0 border-2 border-dashed border-black"></span>
						<div
							class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
						>
							<div
								class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
							>
								<h2 class="mt-4 text-2xl font-medium">{{ service.title }}</h2>
							</div>
							<div
								class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
							>
								<h3 class="mt-4 text-2xl font-medium">{{ service.title }}</h3>
								<p class="mt-4">
									{{ service.description }}
								</p>
								<p class="mt-8 font-bold">Email Us</p>
							</div>
						</div>
					</a>
				</div>
			</section>
		</div>

		<div class="bg-yellow-200 rounded-2xl">
			<div class="p-5 my-20 m-auto">
				<div class="flex flex-wrap">
					<div class="w-full md:w-1/2 m-auto">
						<Anim
							class="transform hover:-translate-y-2 transition duration-500"
							loc="/anim/dsei.json"
						/>
					</div>
					<div class="w-full md:w-1/2 m-auto">
						<p class="mb-20 text-xl lg:text-2xl tracking-tight max-w-lg">
							Moon Syntax offers a diverse range of specialized services to bolster your
							blockchain project's success.
						</p>
						<div class="max-w-md">
							<h3 class="mb-8 text-xl font-semibold tracking-tight">
								Our Offerings Include:
							</h3>
							<div class="flex flex-wrap justify-between m-2">
								<ul class="-m-2">
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Project Management
										</span>
									</li>
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Project Audit
										</span>
									</li>
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Project Development
										</span>
									</li>
								</ul>
								<ul class="-m-2">
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Web3 Consultation
										</span>
									</li>
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Crypto Insurance
										</span>
									</li>
									<li class="flex items-center p-2">
										<svg
											class="mr-3"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.58398 11.917L8.25065 15.5837L17.4173 6.41699"
												stroke="#171A1F"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span class="font-medium tracking-tight"
											>Cold Storage Solutions
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="p-5 my-20 m-auto">
			<div class="flex flex-wrap items-center -m-8">
				<div class="w-full md:w-1/3 p-8">
					<div class="md:max-w-md">
						<div class="flex flex-wrap -m-6">
							<div class="w-auto p-6">
								<h3
									class="mb-4 text-3xl font-semibold tracking-tighter"
									style="letter-spacing: -0.5px"
								>
									Lost Crypto Recovery
								</h3>
								<p class="tracking-tight">
									Reclaim lost cryptocurrencies. Expert assistance for
									forgotten passwords, inaccessible wallets, ensuring
									streamlined recovery.
								</p>
							</div>
							<div class="w-auto p-6">
								<h3
									class="mb-4 text-3xl font-semibold tracking-tighter"
									style="letter-spacing: -0.5px"
								>
									Hacked Crypto Recovery
								</h3>
								<p class="tracking-tight">
									Restore hacked assets, fortify security. Expert
									investigation, recovery strategies for compromised accounts,
									thefts.
								</p>
							</div>
							<div class="w-auto p-6">
								<h3
									class="mb-4 text-3xl font-semibold tracking-tighter"
									style="letter-spacing: -0.5px"
								>
									Blockchain Forensics
								</h3>
								<p class="tracking-tight">
									Trace cyberattacks, identify hackers. Advanced analysis,
									digital footprints tracing within blockchain networks.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="w-full md:w-2/3 p-8">
					<div class="mx-auto">
						<Anim
							class="transform hover:-translate-y-2 transition duration-500"
							loc="/anim/service-pla.json"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Our Services',
		ogTitle: 'Our Services',
		description: "Moon Syntax offers a diverse range of specialized services to bolster your blockchain project's success.",
		ogDescription: "Moon Syntax offers a diverse range of specialized services to bolster your blockchain project's success.",
	});

	const services = [
		{
			title: 'Web 3.0 Development',
			description: 'In a nutshell, what makes Web 3.0 so different from Web 2.0 is the absence of a centralized server.',
		},
		{
			title: 'Project Audit',
			description: 'A project management audit is a formal review that seeks to evaluate a given project based on specific criteria.',
		},
		{
			title: 'Hacking / RE',
			description: 'Hacking refers to activities that seek to compromise digital devices, such as computers, smartphones, tablets, and even entire networks.',
		},
		{
			title: 'Smart Contract Audit',
			description: 'A smart contract audit is a security review conducted by a team of blockchain experts to identify potential vulnerabilities in a smart contract.',
		},
		{
			title: 'Blockchain Development',
			description: 'Blockchain development is the process of creating a blockchain network. It involves designing, coding, and testing a blockchain network.',
		},
		{
			title: 'Smart Contract Development',
			description: 'A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code.',
		},
	];
</script>
