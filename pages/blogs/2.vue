<template>
    <main class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center gap-8">

        <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/' }, { label: 'Blogs' }, { label: 'Nvidia\'s New ChatBot' }]"
            :ui="{ active: 'text-white dark:text-white', li: 'text-white dark:text-white text-opacity-75 dark:text-opacity-75' }" />

        <header>
            <h1 class="text-white text-left text-4xl font-kanit font-light">Did Nvidia just demolish AMD?</h1>
        </header>

        <div>
            <p class="text-white font-kanit text-base font-light opacity-75">
                Nvidia released a new AI ChatBot that runs <b>entirely</b> on your machine <u>locally</u>! And guess what? It can do everything
                we wanted from <b>Windows Copilot</b>. Isn't that crazy that our expectations are <u>fulfilled</u> by an <b>unexpected</b> company?
                Let's discuss about the power of this experiment called <b>Chat With Rtx</b>!
                <br><br>

                Before <u>discussing</u> about the things this chatbot can do, we should consider a <b>fact</b> that this is <u>highly in development</u> at the moment.
                The Nvidia <b>Chat With Rtx</b> can <u>summarize</u> or <u>search</u> documents across your very own computer's files and even <u>videos and playlists</u> from <b>YouTube</b>.
                This ChatBot runs <b>entirely</b> on your <u>system or machine</u>, resulting in really fast <u>speed and responses</u>.
                <br><br>

                Now let's talk about <u>how this works</u>. <b>Chat With Rtx</b> is trained on a <u>large</u> database of the <b>public documents</b> owned my <b>Nvidia</b> itself. The knowledge
                seems to be a little bit <u><i>less</i></u> but as we know that it's in <u>development</u> right now. The fact that it can do <b>all the things</b> that we expected from <u>Windows Copilot</u> is crazy! The <b>craziezt</b> part is
                that you can <b>train</b> this AI with <u>your own</u> documents. You can install text files with information and train the AI and now your <b>AI model</b> have more information!
                <br><br>

                To use <b>Chat With Rtx</b>, there are few system <u>requirements</u>. You need <u>atleast</u> an Rtx <u>30 series</u> card to use this. For whatever reasons, this <b>won't work in 20 series</b> card even tho they have the same sensor cores.
                There's something going on behind the scenes for this thing <u>not working</u> in 20 series card. Apart from this, you need <b>Windows 10/11</b> and atleast <u>8gb vram</u>. Alright, that's it for today. Thanks for reading!
            </p>
        </div>
        <footer class="text-base text-white text-opacity-60">&#169 Kunal. All rights reserved.</footer>
    </main>
</template>