<script lang="ts">
export default {
    data() {
        return {
            blogs: [
                {
                    title: "Will AI replace developers?",
                    slug: '/blogs/1',
                    des: "This is the one of the most asked question back in 2023, so i decided to share my own views on this topic. I've covered everything you need to know in a simple way."
                },
                {
                    title: "Did Nvidia just demolish AMD?",
                    slug: "/blogs/2",
                    des: "Nvidia just recently released an AI chatbot that runs entirely on YOUR machine. It is powered by the special sensor cores (30 & 40 series) in the nvidia video cards."
                }
            ]
        };
    }
};
</script>

<template>
    <div class="font-rubik w-full grid grid-cols-1 gap-4">
        <h1 class="text-[#E9E9F7] text-xl font-kanit text-normal mt-6 col-span-full">Writing</h1>
        <NuxtLink v-for="(blog) in blogs" :to="blog.slug">
            <div class="cursor-pointer p-4 bg-[#1f1f28] hover:bg-[#2C2C37] flex flex-col gap-8 rounded-lg">
                <h1 class="text-[#E9E9F7] font-kanit text-medium">{{ blog.title }}</h1>
                <p class="text-[#E9E9F7] font-kanit font-light opacity-75 text-base mt-[-2rem]">{{ blog.des }}</p>
            </div>
        </NuxtLink>
    </div>
</template>
  