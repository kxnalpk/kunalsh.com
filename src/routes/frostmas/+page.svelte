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
    <Countdown from="2024-11-01 12:00:00" dateFormat="YYYY-MM-DD H:m:s" zone="Asia/India" let:remaining>
        <div>
            <h1 class="text-3xl text-white font-bold py-4">FM QUALS</h1>
            <header class="text-4xl text-white">
                <span>{remaining.months} <span class="opacity-75">months</span></span>
                <span>{remaining.days} <span class="opacity-75">days</span></span>
                <span>{remaining.hours} <span class="opacity-75">hours</span></span>
                <span>{remaining.minutes} <span class="opacity-75">minutes</span></span>
            </header>
        </div>
    </Countdown>

    <div class="my-6 h-[2px] bg-white rounded-all w-[700px]"></div>

    <header class="p-4 text-white bg-[#363638] w-[700px] flex justify-between items-center">
      <h class="font-bold text-lg">May 26th 2024</h>
      <div class="flex-grow text-center">
        <h class="font-bold text-lg opacity-75">- By Omen -</h>
      </div>
      <h class="font-bold text-lg ml-auto">KxnalPk (250$)</h>
    </header>

    <header class="p-4 mt-2 text-white bg-[#363638] w-[700px] flex justify-between items-center">
      <h class="font-bold text-lg">May 25th 2024</h>
      <div class="flex-grow text-center">
        <h class="font-bold text-lg opacity-75">- By Omen -</h>
      </div>
      <h class="font-bold text-lg ml-auto">agnt Ptr (100$)</h>
    </header>
</section>
