const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });
const { token } = require('./config');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    } 
});

client.login(token);

// The same example can be found on the Gist (found in README). This is just to emphasize that keeping your bot token is SUPER, SUPER important.
