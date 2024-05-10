<script>

	import { PUBLIC_WEBHOOK } from "$env/static/public"

    import "../app.css";
    let initialTextIdea = "I'm always seeking for ideas, so feel free to write down the idea so I can work on it! Also, leave your name so I can give you credits!";

    let projects = [
        {
          name: "Hydrate",
          url: "https://github.com/kunalduh/hydrate",
          text: "Drinking water is really important for our health and we always forget that. This is a cross-platform mobile application that reminds you to drink water!"
        },
        {
          name: "Frostmas",
          url: "/frostmas",
          text: "An organization that hosts fortnite tournaments in winter season every year for middle east and asian players. Distributted total 500$ as a prize pool. Returning soon!"
        },
        {
          name: "Socket-CLI-Chat",
          url: "https://github.com/kunalduh/socket-cli-chat",
          text: "An open-sourced end-to-end encrypted CLI chat application for Windows 11. I created this to learn C++ with a main reason to understand socket programming."
        }
    ];

    let socials = [
        {
            name: "X",
            url: "https://twitter.com/kunalduh"
        },
        {
            name: "Discord",
            url: "https://discord.gg/V596KPnmY3"
        },
        {
            name: "Youtube",
            url: "https://youtube.com/@kxnalpk"
        },
        {
            name: "Github",
            url: "https://github.com/kunalsmh"
        }

    ]

    async function handleSendClick() {
        const webhookURL = PUBLIC_WEBHOOK;
        // @ts-ignore
        const content = document.getElementById('idea').value;

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: content })
            });

            if (!response.ok) {
                throw new Error('Failed to send message to Kunal');
            }

            alert('Idea sent successfully to Kunal!');
        } catch (error) {
            console.error('Error sending message to Kunal:', error);
            alert('Failed to send idea to Kunal.');
        }
    }
</script>

<svelte:head>
    <title>Kunal's Website</title>
    <meta name="description" content="Small content creator and a software developer." />
</svelte:head>

<section class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center">
    <header class="flex flex-col gap-3 py-2">
        <!-- svelte-ignore a11y-missing-content -->
        <h1 class="text-[#e5e5e5] text-3xl font-bold">Hi, I'm <span class="text-[#766fc7]">Kunal!</span></h1>
        <p class="text-[#e5e5e5]">A small content creator and a software developer. I write code in Typescript, C++, Go and sometimes C#. I make content about fortnite on youtube! Apart from this, i enjoy listening to music. I'm into rap genre, my fav artists are Travis Scott and Snopp Dogg. Some of my projects are shown below, don't forget to check em' out! Make sure to sub to my youtube channel if you want to support me!</p>
    </header>

    <div class="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        <h1 class="text-[#e5e5e5] text-xl font-bold mt-6 col-span-full">Projects</h1>
        
        {#each projects as project}
            <a href={project.url} class="bg-[#2b2b2c] hover:bg-[#3b3b3c] p-4 flex flex-col gap-8 rounded-lg">
                <div class="flex flex-row items-center gap-2.5">
                    <header class="flex flex-col">
                        <h1 class="text-[#e5e5e5] text-lg font-normal">{project.name}</h1>
                    </header>
                </div>
                <p class="text-[#e5e5e5] font-light opacity-75 mt-[-1.5rem]">{project.text}</p>
            </a>
        {/each}

        <div class="border-dashed border-2 border-[#3b3b3c] p-3 flex flex-col gap-8 rounded-lg">
            <textarea id="idea" placeholder={initialTextIdea} class="text-[#e5e5e5] outline-none h-full w-full font-light opacity-75 bg-transparent resize-none"></textarea>
            <button on:click={handleSendClick} class="bg-[#766fc7] hover:bg-[#5c57a3] text-[#e5e5e5] px-4 py-1 rounded-lg">Click here to send</button>
        </div>
    </div>

    <div class="flex flex-wrap justify-between py-4">
        <footer class="flex items-center py-2 gap-3">
            {#each socials as social}
                <a href={social.url} class="text-[#e5e5e5] bg-[#3b3b3c] px-2 py-1 text-sm rounded-full">{social.name}</a>
            {/each}
        </footer>

        <footer class="py-2">
            <h1 class="text-[#e5e5e5] text-opacity-70 font-light">© 2024 Kunal Sharma. All rights reserved.</h1>
        </footer>
    

</section>