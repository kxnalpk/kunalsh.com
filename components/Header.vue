<script lang="ts">

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
                    "img": "/images/socials/linkedin.svg",
                    "url": "https://i-forgot",
                    "alt": "linkedin"
                },
                {
                    "img": "/images/socials/x.svg",
                    "url": "https://x.com/hiftea/",
                    "alt": "x",
                }
            ]
        };
    },
};
</script>

<script setup lang="ts">
const data = useLanyard({ method: "ws", id: "853147823066578946" });
</script>

<template>
    <header class="w-full">
        <div class="gap-6 mt-6 flex flex-nowrap justify-between items-center text-white">
            <div>
                <h1 class="font-kanit font-regular text-4xl">Kunal Sharma</h1>
                <p class="opacity-75 text-lg font-kanit font-light">Web & App Developer</p>
                <div class="flex gap-1 mt-3">

                    <a :href="social.url" class="flex" v-for="(social, index) in socials" :key="index">
                        <NuxtImg :alt="social.alt"
                            class="hover:opacity-80 w-fit max-w-[20px]" :src="social.img">
                        </NuxtImg>
                    </a>

                    <div class="bg-cg-2 rounded-md px-2 py-1 text-sm text-white opacity-80 font-kanit font-base">
                        <span v-if="data?.discord_status === 'offline'">Currently Offline</span>
                        <span v-else>Currently Online</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>