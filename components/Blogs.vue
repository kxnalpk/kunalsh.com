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
                    title: "How I started programming?",
                    slug: "/blogs/1",
                    des: "I documented my whole software development journey in this blog, from web development to app development. And also how i managed to buy a really good PC with just web dev."
                }
            ]
        };
    }
};
</script>

<template>
    <div class="font-rubik w-full grid grid-cols-1 gap-4">
        <h1 class="text-white text-xl font-kanit text-normal mt-6 col-span-full">Writing</h1>
        <NuxtLink v-for="(blog) in blogs" :to="blog.slug">
            <div class="cursor-pointer p-4 bg-cg-2 hover:bg-cg-5 flex flex-col gap-8 rounded-lg">
                <h1 class="text-white font-kanit text-medium">{{ blog.title }}</h1>
                <p class="text-white font-kanit font-light opacity-75 text-base mt-[-2rem]">{{ blog.des }}</p>
            </div>
        </NuxtLink>
    </div>
</template>
  