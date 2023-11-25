<template>
    <div class="bg-yellow-200">
        <div class="m-auto max-w-6xl">
            <div class="flex items-center justify-center h-10 py-10 uppercase lg:text-lg font-bold">
                <div class="flex items-center space-x-4">
                    <NuxtLink to="/" v-if="!isIndexPage">HOME</NuxtLink>
                    <NuxtLink to="/service">Services</NuxtLink>
                    <NuxtLink to="/work">work</NuxtLink>
                    <NuxtLink to="/about">about</NuxtLink>
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