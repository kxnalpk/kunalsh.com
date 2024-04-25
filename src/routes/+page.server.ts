// page.server.ts
export const prerender = true;

import { PUBLIC_WEBHOOK } from "$env/static/public";

export async function _handleSendClick() {
    const webhookURL = PUBLIC_WEBHOOK;
    const contentInput = document.getElementById('idea') as HTMLInputElement | null;

    if (!contentInput) {
        console.error('Input element not found');
        return;
    }

    const content = contentInput.value;

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