<script setup lang="ts">
useSeoMeta({
  title: 'Kunal Sharma',
  keywords: "kunalsmh",
  themeColor: "#ffffff",
  ogSiteName: "kunalsmh",
  ogUrl: "https://kunalsh.com",
  ogTitle: 'Kunal Sharma',
  description: 'I\'m a 17 years old student and a developer. I write code in rust, ts & js.',
  ogDescription: 'I\'m a 17 years old student and a developer. I write code in rust, ts & js.',
});

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
})
</script>

<template>
  <main v-if="isPageLoaded" class="items-stretch max-w-wrapper pt-6 sm:pt-24 px-4 m-auto flex flex-col justify-center">
    <Transition name="fade-top" appear>
      <header>
        <Header />
        <About />
      </header>
    </Transition>

    <Transition name="fade-bottom" appear>
      <header>
        <Projects />
        <Testimonials />
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