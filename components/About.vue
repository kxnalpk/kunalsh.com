<script lang="ts">
export default {
  data() {
    return {
      seeMore: false,
    };
  },
};
</script>

<template>
  <header class="mt-6">
    <h1 class="text-white text-xl font-kanit font-medium">About</h1>
    <p class="mt-2 text-white opacity-75 font-rubik font-normal">howdy? i'm a student and a software
      developer. I write code in rust, ts and js. I offer web & app development services. oh and i love capybaras and
      marmots c:</p>

    <div v-if="seeMore">
        <br>
      <p class="text-white opacity-75">I started coding in 2020 when the covid pandemic was a thing. I started with python and had really fun with it. I then started learning other languages and still learning more. Apart from coding, i really like playing games in free time. My favourite games are RDR2 and TLOU1.</p>
    </div>

    <button class="text-white hover:underline hover:underline-offset-4 mt-2 hover:opacity-90 transition-all ease-in" @click="seeMore = !seeMore">
      {{ seeMore ? 'See less' : 'See more' }}
    </button>

  </header>
</template>