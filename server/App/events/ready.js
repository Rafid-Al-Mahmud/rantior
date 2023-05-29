const handle_ready = (message,client,Discord) => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get('1109592240566829127');
    if (channel) {
        //embed.addField('Field 2', 'Value 2');
        const embed = new Discord.EmbedBuilder()
            .setColor(0x0099FF).setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Rantior', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


        //channel.send({ embeds: [embed] });
        console.log('Message sent!');
        //channel.send('Server Started');
    } else {
        console.log('Channel not found.');
    }
}
module.exports = handle_ready;