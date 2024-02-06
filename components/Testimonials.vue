<script lang="ts">
export default {
    data() {
        return {
            testimonials: [
                {
                    name: "Pratik Kamboj",
                    username: "@pratikkamboj",
                    text: "Collaborating with Kunal is a delightful and impressive experience, both personally and professionally. He goes beyond achieving goals, it's about the joy he put in his work.",
                    img: "/images/testimonials/pratik.jpg",
                    alt: "pratik",
                },
                {
                    name: "Rony",
                    username: "@ronykax",
                    text: "Kunal is an awesome developer and a pro at many other things! He makes everything look good and work great. Working with him is always fun and he's a really good friend.",
                    img: "/images/testimonials/rony.png",
                    alt: "rony",
                },
                {
                    name: "Dante",
                    username: "@priyobrotokar",
                    text: "Kunal is a creative powerhouse mastering web development and eye-catching design. He dives fearlessly into projects, whipping up impressive solutions and knowledge.",
                    img: "/images/testimonials/dante.png",
                    alt: "dante",
                },
                {
                    name: "Fishkido",
                    username: "@fishkido",
                    text: "Kunal is an amazing and pationate developer and UI/UX designer. He attempts many projects and always brings something unique. He's highly trusted friend for me!",
                    img: "/images/testimonials/fishkido.png",
                    alt: "fishkido",
                }
            ]
        };
    }
};
</script>

<template>
    <div class="font-rubik w-full grid grid-cols-1 gap-8 sm:grid-cols-2">
      <h1 class="text-white text-xl font-kanit text-normal mt-6 col-span-full">Testimonials</h1>
      <div v-for="(testimonial, index) in testimonials" :key="index" class="cursor-pointer g-cg-2 p-4 bg-cg-2 hover:bg-cg-5 flex flex-col gap-8 rounded-lg">
        <div class="flex flex-row items-center gap-2.5">
          <NuxtImg class="w-12 rounded-full" width="48" height="48" :alt="testimonial.alt" :src="testimonial.img" />
          <header class="flex flex-col">
            <h1 class="text-white text-lg font-kanit font-normal">{{ testimonial.name }}</h1>
            <p class="text-cg-4 font-kanit font-light">{{ testimonial.username }}</p>
          </header>
        </div>
        <p class="text-white font-kanit font-light opacity-75 text-base mt-[-1rem]">{{ testimonial.text }}</p>
      </div>
    </div>
  </template>
  