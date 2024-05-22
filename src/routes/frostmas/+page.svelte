<script>
    import "../../app.css"
    // @ts-ignore
    import Countdown from 'svelte-countdown/src/index.js'
</script>

<svelte:head>
    <title>Frostmas</title>
    <meta name="description" content="Hosting fortnite tournaments to make your winter better!" />
</svelte:head>

<section class="flex items-center justify-center max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex-col">
    <Countdown from="2024-11-01 09:30:00" dateFormat="YYYY-MM-DD H:m:s" zone="Europe/Athens" let:remaining>
        <div class="text-white text-4xl text-center">
            {#if remaining.done === false}
            <span>{remaining.months} <span class="opacity-75">months</span> </span>
            <span>{remaining.weeks} <span class="opacity-75">weeks</span></span>
            <span>{remaining.days} <span class="opacity-75">days</span></span>
            {:else}
            <h2>The time has come!</h2>
            {/if}
        </div>
    </Countdown>
</section>
