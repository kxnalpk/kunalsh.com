<script setup lang="ts">
const data = useLanyard({ method: "ws", id: "853147823066578946" });
console.log(data);
</script>

<template>
    <div class="py-8 gap-2 flex flex-col justify-center items-center">
        <NuxtImg width="150" src="/images/spotify.svg"></NuxtImg>

        <div v-if="data && data.spotify">
            <h1 class="text-white text-base font-kanit font-light">Listening to <a :href="`https://open.spotify.com/track/${data.spotify?.track_id}`" class="text-green-300">{{ data.spotify?.song }}</a> on spotify!</h1>
        </div>

        <h1 class="text-white text-base font-kanit font-light" v-else>Currently not listening to spotify</h1>
    </div>
</template>