<script lang="ts">
export default {
    data() {
        return {
            projects: [
                {
                    title: ".hif format",
                    des: "My own image file format created for fun! Install the \"hif_opener.exe\" to open hif files. clone the repo and compile to make your own hif file.",
                    url: "https://github.com/kunalsmh/.hif/",
                    timeline: "2023 — Now",
                },
                {
                    title: "wordhunt.fun",
                    des: "Silly little game in which you have to find the correct word from a sentence of random words as fast as you can and beat everyone's speed record.",
                    url: "https://github.com/kunalsmh/wordhunt.fun/",
                    timeline: "2023 — Now",
                }
            ]
        };
    }
};
</script>

<template>
    <div class="max-w-wrapper w-full">
        <h1 class="text-white text-2xl mt-6">Projects</h1>

        <div v-for="(project, index) in projects" :key="index" class="items-center justify-between mt-6 flex gap-8">
            <div class="flex flex-row items-center gap-2.5">
                <h1 class="text-cg-3 text-base font-inter font-medium">{{ project.timeline }}</h1>
            </div>
            <div class="max-w-xl">
                <a :href="project.url" class=" text-white hover:underline hover:underline-offset-4">{{ project.title }}</a>
                <p class="text-cg-3">{{ project.des }}</p>
            </div>
        </div>
    </div>
</template>
