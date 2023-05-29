const { Discord, client } = require('./bot');
const ajax = require('../../Client/lib/ajax');

client.on('ready', (message) => require('../../events/ready')(message,client,Discord));
client.on('messageCreate', (message) => require('../../events/messageCreate')(message));
module.exports = { c: client }