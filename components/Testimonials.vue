<script lang="ts">
export default {
    data() {
        return {
            testimonials: [
                {
                    name: "Browny",
                    username: "@legendfroggy",
                    text: "When I first saw kunal on DAC and CA, he was amusing and looked really good. I see him now as the same fascinating person who loves capybaras and programming.",
                    img: "/images/testimonials/browny.png",
                    alt: "browny",
                },
                {
                    name: "Rony",
                    username: "@ronykax",
                    text: "Kunal is an awesome developer and a pro at many other things! He makes everything look good and work great. Working with him is always fun and he's a really good.",
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
                    name: "Polycord",
                    username: "@polycord",
                    text: "Kunal is an amazing UI/UX designer and developer! He does the job in a fast speed and comes out perfect every time. I can trust him with anything and he’s also a good guy!",
                    img: "/images/testimonials/polycord.png",
                    alt: "pratik",
                }
            ]
        };
    }
};
</script>

<template>
    <div class="font-rubik w-full grid grid-cols-1 gap-8 sm:grid-cols-2">
      <h1 class="text-white text-xl font-kanit text-normal mt-6 col-span-full">Testimonials</h1>
      <div v-for="(testimonial, index) in testimonials" :key="index" class="g-cg-2 p-4 bg-cg-2 flex flex-col gap-8 rounded-lg">
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
  