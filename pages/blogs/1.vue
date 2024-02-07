<template>
    <main class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center gap-8 py-4">

        <UBreadcrumb divider="/"
            :links="[{ label: 'Home', to: '/' }, { label: 'Blogs' }, { label: 'Will AI Replace Devs?' }]"
            :ui="{ active: 'text-white dark:text-white', li: 'text-white dark:text-white text-opacity-75 dark:text-opacity-75' }" />

        <header>
            <h1 class="text-white text-left text-4xl font-kanit font-light">Will Artificial Intelligence actually replace
                developers?</h1>
        </header>

        <div>
            <p class="text-white font-kanit text-base font-light opacity-75"><b>Will Artificial Intelligence replace software developers?</b>
                This is one of the most asked questions in 2023, so I decided to write <u>my views</u> on this. People have been saying that AI will
                replace developers, and today i'm here to discuss this in a straightforward way without any <b>bullshit</b>.
                <br><br>
                AI came in hype at the <b>end of 2022</b>. There was indeed hype about it before too, but the actual popularity was shown at the end of 2022. 
                I am here to specifically target one question: <b>Will AI replace developers?</b> If I talk about <u>web development</u>, <b>frontend</b> web developers are 
                indeed going to get <u>replaced with AI</u>. Although, even without AI, tools like <b>Framer</b> and <b>Webflow</b> can easily create really good and responsive websites. 
                Now this is actually bad for web developers because <b>startups with limited budget</b> would prefer using some sort of website builder or the <b>AI features</b> provided 
                by these tools. But hey, i'm only talking about frontend. Implementing a decent quality backend using web builders or an AI tool is simply <u>not possible</u>. When it comes
                to complexity and interactive tasks, people still prefer web devs. Although, these tools has <b>definitely</b> <u>effected web developers.</u>

                <br><br>
                Apart from what we have discussed, there is no chance for a big company to use <b>AI instead of hiring real developers</b>. Enough discussion about <u>web development</u>, let's talk about 
                <b>native applications</b>. Desktop and mobile applications are actually more <b>difficult</b> and <b>complex</b> to develop compared to <u>web apps</u>. Although AI can help you solve some issues, it simply 
                cannot create a native application for you, whether it is a desktop or mobile app. Yep these were <b>my views</b> on this topic. Thanks for reading.
            </p>
    </div>

    <footer class="text-base text-white text-opacity-60">&#169 Kunal. All rights reserved.</footer>
 </main>
</template>