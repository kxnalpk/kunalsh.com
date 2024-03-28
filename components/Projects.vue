<script lang="ts">
export default {
    data() {
        return {
            projects: [
                {
                  name: "Hydrate",
                  url: "https://github.com/kunalsmh/hydrate",
                  text: "Drinking water is really important for our health and we always forget that, this is a cross-platform mobile application that reminds you to drink water!"
                },
                {
                  name: "Battlezone",
                  url: "https://github.com/kunalsmh/",
                  text: "A simple FPS shooter game created in unreal engine 5. My first public and open-sourced game dev project. Currently in development. Make sure to join my discord for updates!"
                }
            ]
        };
    }
};
</script>

<template>
    <div class="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
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
  