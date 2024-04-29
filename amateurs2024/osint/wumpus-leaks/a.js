const {WebhookClient} = require('discord.js')

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/id/token' });
async function main() {
    for (let i = 0; i < 10000; i++) {
        let r = `${i}`.padStart(4, '0');
        webhookClient.send({ content: `https://media.discordapp.net/attachments/643807708457205779/1227158127208566784/IMG_${r}.jpg` })
    }
}

main();
