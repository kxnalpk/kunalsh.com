<template>
    <header class="w-full">
        <div class="gap-6 mt-6 flex flex-nowrap justify-between items-center text-white">
            <div>
                <h1 class="font-kanit font-regular text-4xl">Kunal Sharma</h1>
                <p class="opacity-75 text-lg font-kanit font-light">Web & App Developer</p>
                <div class="flex gap-1 mt-3">
                    <a :href="social.url" class="flex" v-for="(social, index) in socials" :key="index">
                        <NuxtImg width="26" :alt="social.alt" class="hover:opacity-80 w-fit max-w-[26px]" :src="social.img">
                        </NuxtImg>
                    </a>
                    <div :class="['bg-cg-2', 'rounded-md', 'px-2', 'py-1', 'text-sm', 'text-white', 'opacity-80', 'font-kanit', 'font-base', {
                        'bg-cg-idle': data?.discord_status === 'idle',
                        'bg-cg-dnd': data?.discord_status === 'dnd',
                        'bg-cg-online': data?.discord_status === 'online',
                        'bg-cg-2': data?.discord_status === 'offline',
                    }]">
                        <div v-if="data?.discord_status === 'offline'">
                            <span>offline</span>
                        </div>
                        <div v-else-if="data?.discord_status === 'online'">
                            <span>online</span>
                        </div>
                        <div v-else-if="data?.discord_status === 'dnd'">
                            <span>dnd</span>
                        </div>
                        <div v-else-if="data?.discord_status === 'idle'">
                            <span>idle</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

const data = useLanyard({ method: "ws", id: "470904884946796544" });

const socials = [
    {
        "img": "/images/socials/github.svg",
        "url": "https://github.com/kunalsmh/",
        "alt": "github",
    },
    {
        "img": "/images/socials/linkedin.svg",
        "url": "https://linkedin.com/yourusername",
        "alt": "linkedin"
    },
    {
        "img": "/images/socials/x.svg",
        "url": "https://twitter.com/kunalsmh",
        "alt": "x",
    }
];
</script>
