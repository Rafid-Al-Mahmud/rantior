const Discord = require("discord.js");

// Bot command to trigger the introduction process
const INTRODUCTION_COMMAND = '/information';

// Channel ID where the introductions will be posted
// const INTRODUCTION_CHANNEL_ID = 1109459105606795354;
const INTRODUCTION_CHANNEL_ID = BigInt("1109592240566829127");

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.Guilds,
        // Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ]
});

module.exports = { Discord, client, INTRODUCTION_COMMAND, INTRODUCTION_CHANNEL_ID };