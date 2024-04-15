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
                  name: "Da Basement",
                  url: "https://github.com/kunalsmh/da_basement",
                  text: "You are stuck in a guy's basement along with other kids and you have to escape and find a way to free the kids too! Join my discord server for updates and game progress!"
                }
            ]
        };
    }
};
</script>

<template>
    <div class="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
      <h1 class="text-[#E9E9F7] font-kanit text-xl font-normal mt-6 col-span-full">Projects</h1>
      <a :href="project.url" v-for="(project, index) in projects" :key="index" class="bg-[#1f1f28] hover:bg-[#2C2C37] p-4 flex flex-col gap-8 rounded-lg">
        <div class="flex flex-row items-center gap-2.5">
          <header class="flex flex-col">
            <a class="text-[#E9E9F7] text-lg font-kanit font-normal">{{ project.name }}</a>
          </header>
        </div>
        <p class="text-[#E9E9F7] font-kanit font-light opacity-75 mt-[-1.5rem]">{{ project.text }}</p>
      </a>
    </div>
  </template>
  