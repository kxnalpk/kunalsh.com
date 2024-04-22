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
          name: "Da Basement",
          url: "https://github.com/kunalduh/da_basement",
          text: "You are stuck in a guy's basement along with other kids and you have to escape and find a way to free the kids too! Join my discord server for updates and game progress!"
        },
        {
          name: "Socket-CLI-Chat",
          url: "https://github.com/kunalduh/socket-cli-chat",
          text: "An end-to-end encrypted CLI chat application for Windows 10 and 11. I created this to learn C++ and understand socket programming. Connection cirectly from console."
        }
    ];

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
    <meta name="description" content="Yes" />
</svelte:head>

<section class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center">
    <header class="flex flex-col gap-3">
        <!-- svelte-ignore a11y-missing-content -->
        <h1 class="text-[#e5e5e5] text-3xl font-bold">Hi, I'm <span class="text-[#766fc7]">Kunal!</span></h1>
        <p class="text-[#e5e5e5]">Yet another guy who likes to code things. I write in TypeScript, Dart, Go, C++, and sometimes C#. I make dozens of projects and release them if they are good enough to be shown publicly. The best ones so far are shown above.</p>
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

        <div class="border-dashed border-2 border-[#3b3b3c] p-4 flex flex-col gap-8 rounded-lg">
            <textarea id="idea" placeholder={initialTextIdea} class="text-[#e5e5e5] outline-none h-full w-full font-light opacity-75 bg-transparent resize-none"></textarea>
            <button on:click={handleSendClick} class="bg-[#766fc7] hover:bg-[#5c57a3] text-[#e5e5e5] px-4 py-2 rounded-lg">Click here to send</button>
        </div>
    </div>

    <div class="py-8 gap-1 flex flex-col items-left text-left">
        <h1 class="text-[#e5e5e5] text-opacity-70 font-kanit font-light">© 2024 Kunal sharma. All rights reserved.</h1>
    </div>
</section>