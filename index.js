const Discord = require("discord.js");

// Bot command to trigger the introduction process
const INTRODUCTION_COMMAND = '/information';

// Bot token here
const TOKEN = 'MTEwOTUwODc2ODY0NDk5NzIwMg.GMBI5n.3tO2UQ-yzmznDGKE53aB-Uu_8qtWt7OiEdPb04';

// Channel ID where the introductions will be posted
// const INTRODUCTION_CHANNEL_ID = 1109459105606795354;
const INTRODUCTION_CHANNEL_ID = 1109592240566829127n;

// Questions to ask
const questions = [
    '➷ Name (Full):',
    '➷ Surname:',
    '➷ Age:',
    // Add more questions here
];

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.Guilds,
        // Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ]
});

module.exports = { client, TOKEN, INTRODUCTION_COMMAND, INTRODUCTION_CHANNEL_ID, questions };
require('./clientEvents').c.login(TOKEN);