const Eris = require("eris");
const { token } = require('../config');

const client = new Eris(token);

client.on("ready", () => {
    console.log("I am ready!"); 
});

client.on("messageCreate", async msg => { 
    if(msg.content === "ping") client.createMessage(msg.channel.id, "pong");
});

client.connect(); 