<script>
    import "../../app.css"
    // @ts-ignore
    import Countdown from 'svelte-countdown/src/index.js'

    let players = [
        {
          name: "Player [1]",
          points: "0"
        },
        {
          name: "Player [2]",
          points: "0"
        },
        {
          name: "Player [3]",
          points: "0"
        },
        {
          name: "Player [4]",
          points: "0"
        },
        {
          name: "Player [5]",
          points: "0"
        },
        {
          name: "Player [6]",
          points: "0"
        },
        {
          name: "Player [7]",
          points: "0"
        },
        {
          name: "Player [8]",
          points: "0"
        },
        {
          name: "Player [9]",
          points: "0"
        },
        {
          name: "Player [10]",
          points: "0"
        },
    ];
</script>

<svelte:head>
    <title>Frostmas</title>
    <meta name="description" content="Hosting fortnite tournaments to make your winter better!" />
</svelte:head>

<section class="flex items-center justify-center max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex-col">
    <Countdown from="2024-05-25 17:00:00" dateFormat="YYYY-MM-DD H:m:s" zone="Asia/India" let:remaining>
        <div class="text-whitetext-center">
            {#if remaining.done === false}

            <h1 class="text-3xl text-white font-bold py-4">STARTING IN</h1>

            <header class="text-4xl text-white">
                <span>{remaining.hours} <span class="opacity-75">hours</span></span>
                <span>{remaining.minutes} <span class="opacity-75">minutes</span></span>
                <span>{remaining.seconds} <span class="opacity-75">seconds</span></span>
            </header>
            {:else}
            <div class="bg-[#353536] text-4xl text-white rounded-lg p-4">
                Happening Right Now - Major Quals 2
            </div>
          
            {/if}
        </div>
    </Countdown>
</section>
