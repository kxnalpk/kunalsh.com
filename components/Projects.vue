<script lang="ts">
export default {
    data() {
        return {
            projects: [
                {
                    name: ".hif img format",
                    url: "https://github.com/kunalsmh/.hif",
                    text: "My own image file format created for fun! Install the \"hif_opener.exe\" to open hif files. clone the repo and compile to make your own hif file.",
                },
                {
                    name: "wordhunt.fun",
                    url: "https://github.com/kunalsmh/wordhunt.fun",
                    text: "Silly little game in which you have to find the correct word from a sentence of random words as fast as you can and beat everyone's speed record."
                },
                {
                  name: "hydrate",
                  url: "https://github.com/kunalsmh/hydrate",
                  text: "Drinking water is really important for our health and we always forget that, this is a cross-platform mobile application that reminds you to drink water!"
                },
                {
                  name: "chad coders",
                  url: "https://github.com/organizations/chadcoders",
                  text: "A group of creative software developers and graphic designers offering web and app development services. Currently working on it, will catch ya soon!"
                }
            ]
        };
    }
};
</script>

<template>
    <div class="w-full grid grid-cols-1 gap-8 sm:grid-cols-2">
      <h1 class="text-white font-kanit text-xl font-normal mt-6 col-span-full">Projects</h1>
      <a :href="project.url" v-for="(project, index) in projects" :key="index" class="bg-cg-2 hover:bg-cg-5 p-4 flex flex-col gap-8 rounded-lg">
        <div class="flex flex-row items-center gap-2.5">
          <header class="flex flex-col">
            <a class="text-white text-lg font-kanit font-normal">{{ project.name }}</a>
          </header>
        </div>
        <p class="text-white font-kanit font-light opacity-75 mt-[-1.5rem]">{{ project.text }}</p>
      </a>
    </div>
  </template>
  