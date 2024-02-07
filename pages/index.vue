<template>
    <main v-if="isPageLoaded" class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center">
      
      <Transition name="fade-top" appear>
        <header>
          <Header />
          <About />
        </header>
      </Transition>
  
      <Transition name="fade-bottom" appear>
        <header>
          <Projects />
          <Blogs />
          <Footer />
        </header>
      </Transition>
    </main>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        isPageLoaded: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isPageLoaded = true;
      }, 100);
    },
  };
  </script>