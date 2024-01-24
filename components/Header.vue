<script lang="ts">
import type { NuxtImg } from '#build/components';

export default {
    data() {
        return {
            socials: [
                {
                    "img": "/images/socials/github.svg",
                    "url": "https://github.com/kunalsmh/",
                    "alt": "github",
                },
                {
                    "img": "/images/socials/discord.svg",
                    "url": "https://discord.com/users/853147823066578946/",
                    "alt": "discord",
                },
                {
                    "img": "/images/socials/x.svg",
                    "url": "https://x.com/hiftea/",
                    "alt": "x",
                },
                {
                    "img": "/images/socials/insta.svg",
                    "url": "https://instagram.com/@kunal90ti/",
                    "alt": "insta",
                },
            ]
        };
    },
};
</script>

<script setup lang="ts">
const data = useLanyard({ method: "rest", id: "853147823066578946" });
</script>

<template>
    <header class="w-full">
        <div class="gap-6 mt-6 flex flex-nowrap items-center text-white">
            <div>
                <h1 class="font-kanit font-medium text-5xl">Kunal Sharma</h1>
                <p class="opacity-75 text-lg font-kanit font-light">Web & App Developer</p>
                <div class="flex gap-2 mt-3">

                    <NuxtImg :alt="social.alt" v-for="(social, index) in socials" :key="index"
                        class="hover:opacity-70 transition-all w-fit ease-in max-w-[20px]" :src="social.img">
                    </NuxtImg>
                    
                    <div class="bg-cg-2 rounded-md px-2 py-1 text-sm text-white opacity-80 font-kanit font-base">
                        <span v-if="data?.discord_status === 'offline'">Currently Offline</span>
                        <span v-else>Currently Online</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
