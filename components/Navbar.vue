<template>
    <div class="bg-yellow-200">
        <div class="m-auto max-w-6xl">
            <div class="flex items-center justify-center h-10 py-10 uppercase lg:text-lg font-bold">
                <div class="flex items-center space-x-4">
                    <NuxtLink v-if="!isIndexPage" to="/" class="">
                        <Synb textinput="HOME" />
                    </NuxtLink>
                    <a href="https://blog.moonsyntax.com/">BLOG</a>
                    <NuxtLink to="/team">Team</NuxtLink>
                    <NuxtLink to="/service">Services</NuxtLink>
                    <NuxtLink to="/work">work</NuxtLink>
                    <NuxtLink to="/contact">CONTACT</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['isIndexPage']
    };
</script>