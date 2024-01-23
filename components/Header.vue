<script lang="ts">
import type { NuxtImg } from '#build/components';

export default {
    data() {
        return {
            socials: [
                {
                    "img": "/images/socials/github.svg",
                    "url": "https://github.com/kunalsm/h",
                },
                {
                    "img": "/images/socials/discord.svg",
                    "url": "https://discord.com/users/853147823066578946/"
                },
                {
                    "img": "/images/socials/x.svg",
                    "url": "https://x.com/hiftea/",
                },
                {
                    "img": "/images/socials/insta.svg",
                    "url": "https://instagram.com/@kunal90ti/"
                }
            ]
        };
    },
};
</script>

<template>
    <header class="w-full">
        <NuxtImg src="/images/banner.png" width="752.5px" height="353px" alt="banner" class="w-full object-cover" />
        <div class="gap-6 mt-6 flex flex-nowrap items-center text-white">
            <NuxtImg src="/images/avatar.png" width="105px" height="105px" alt="avatar" class="rounded-full object-cover" />
            <div>
                <h1 class="font-rubik text-2xl">Kunal</h1>
                
                <p class="font-rubik text-lg text-cg-1">Web & App Developer</p>
                <div class="flex gap-2 mt-2">
                    <NuxtImg v-for="(social, index) in socials" :key="index" class="hover:opacity-70 transition-all w-fit ease-in max-w-[18px]" width="18px" :src="social.img"></NuxtImg>
                </div>
            </div>
        </div>
        <div class="bg-cg-2 text-white mt-6 p-4 rounded-lg font-rubik">
            <a href="mailto:contact@kunalsh.com">Mail at contact@kunalsh.com to contact me</a>
        </div>
    </header>
</template>
