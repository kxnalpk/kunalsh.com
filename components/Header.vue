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
                },
                {
                    "img": "/images/socials/kofi.svg",
                    "url": "https://kofi.com/kunalsmh/"
                }
            ]
        };
    },
};
</script>

<template>
    <header class="w-full">
        <div class="gap-6 mt-6 flex flex-nowrap items-center text-white">
            <div>
                <h1 class="font-kanit font-medium text-5xl">Kunal Sharma</h1>
                <p class="opacity-75 text-lg font-kanit font-light">Web & App Developer</p>
                <div class="flex gap-2 mt-3">
                    <NuxtImg v-for="(social, index) in socials" :key="index" class="hover:opacity-70 transition-all w-fit ease-in max-w-[20px]" width="20px" :src="social.img"></NuxtImg>
                </div>
            </div>
        </div>
        <div class="bg-cg-2 text-white mt-6 p-4 rounded-lg font-light font-kanit">
            <a href="mailto:contact@kunalsh.com">Mail at contact@kunalsh.com to contact me</a>
        </div>
    </header>
</template>
