<script lang="ts">
export default {
    data() {
        return {
            experiences: [
                {
                    title: "Netcord",
                    url: "https://netcord.in",
                    img: "/images/netcord.png"
                },
                {
                    title: "Body Shop",
                    url: "https://thebodyshop.com",
                    img: "/images/thebodyshop.png"
                }
            ]
        };
    }
};
</script>

<template>
    <div class="w-full">
        <h1 class="text-white text-2xl mt-6">Experience</h1>
        <div v-for="(experience, index) in experiences" :key="index" class="items-center justify-between mt-6 flex gap-8 rounded-lg bg-cg-2 p-4">
            <div class="flex flex-row items-center gap-2.5">
                <NuxtImg class="w-12 rounded-full" :src="experience.img"/>
                <h1 class="text-white text-xl font-inter font-medium">{{ experience.title }}</h1>
            </div>
            <div class="items-center">
                <a :href="experience.url" class="text-white p-2.5 rounded-lg bg-[#373737] hover:opacity-90 transition-all ease-in">Learn More</a>
            </div>
        </div>
    </div>
</template>
