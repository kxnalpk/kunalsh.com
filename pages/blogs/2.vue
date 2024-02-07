<template>
    <main class="items-stretch max-w-wrapper pt-6 sm:pt-28 px-4 m-auto flex flex-col justify-center gap-8">

        <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/' }, { label: 'Blogs' }, { label: 'My Coding Journey' }]"
            :ui="{ active: 'text-white dark:text-white', li: 'text-white dark:text-white text-opacity-75 dark:text-opacity-75' }" />

        <header>
            <h1 class="text-white text-left text-4xl font-kanit font-light">Untitled Title</h1>
        </header>

        <div>
            <p class="text-white font-kanit text-base font-light opacity-75">
                Untitled Paragraph
            </p>
        </div>
    </main>
</template>