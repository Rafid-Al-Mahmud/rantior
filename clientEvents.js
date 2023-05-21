const { client, INTRODUCTION_CHANNEL_ID, INTRODUCTION_COMMAND, questions } = require('.');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    // messageCreate
    // if(x.author.bot===false) x.channel.send("@"+x.author.username+"#"+x.author.discriminator)
    require('fs').writeFile('message.json', JSON.stringify(message), err=>{
        if (err) throw err;
        console.log('New Message Saved!');
    });

    // Check if the message starts with the introduction command and is sent in the introduction channel
    // console.log(message.content.startsWith(/intro .+#.+/ || 'intro Rafid#0123'));
    if (
        /intro .+#.+/.test(message.content) || message.content.startsWith('intro Rafid#0123')
        // && message.channel.id === Number('1109592240566829127')
    ) {
        const info=JSON.parse(message.content.replace(/intro .+#.+/,''));
        message.channel.send(`
        **Introduction about: @Rafid#0123**
        
        > **➷ Name (full) :name_badge: **: *${info.name || ""}*
        > **➷ Discord**: *${info.discord || "\`e.g. {name#number} \`"}*
        > **➷ YouTube :YouTube: **: *@${info.yt || ""}*
        > **➷ Age**: *${info.age || "\`{18+/16/20.4}\`"}*
        > **➷ Email :e_mail: **: *||${info.email || '\`e.g. {"||x@y.z||"}\`'}||*
        > **➷ Surname**: *${info.surname || ""}*
        > **➷ Pronouns**: *${info.pronouns || '\`{"He/Him" / "She/Her"}\`'}*
        > **➷ Height :arrow_double_up: **: *${info.height || "\`{x'y}\`"}*
        > **➷ Weight :arrow_heading_up: **: *${info.weight || "\`{xKGs}\`"}*
        > **➷ birthday :birthday: **: *${info.birthday || "\`{date month}\`"}*
        > **➷ BMI**: *${info.bmi || ""}*
        > **➷ Blood Group:drop_of_blood:**: *${info.blood_group || "\`{A+/B+/O+/A-}\`"}*
        > **➷ BP**: *${info.bp || "\`{Low / Normal/ High}\`"}*
        > **➷ Skin type**: *${info.skin_type || ""}*
        > **➷ Likes :thumbsup: **: *${info.likes || "\`e.g. {my cat, brother, anime}\`"}*
        > **➷ Dislikes :thumbsdown: **: *${info.dislikes || "\`e.g. {when someone doing ... / everyone}\`"}*
        > **➷ Gender :transgender_symbol: **: *${info.gender || ""} \`e.g. {Male / Female}\` *
        > **➷ Place From  **: *${info.place_from || "\`e.g. {Mymensingh, Bangladesh / Uttar Pradesh, India / Hyderabad, India}\`"}*
        > **➷ Hobbies :person_raising_hand:**: *${info.hobbies || "\`e.g. {Gardening / Cooking / Body building / Bot Development / Designing / Web Development / programming, game development / Football / Cricket / Compettive-[AtCoder / Codeforces / CodeChe]}\`"}*
        > **➷ Workflow**: *${info.workflow || ""}*
        > **➷ Passion**: *${info.passion || ""}*
        > **➷ Career**: *${info.career || "\`e.g. {Web Developer and Volunteer/Programmer/Ex-web/Artist, Gamer}\`"}*
        > **➷ Education :student:**: *${info.education || "\`e.g. {School (Class x) / Collage (xth year) / University (xth semester)}\`"}*
        > **➷ About Myself**: *${info.about_myself || ""}*
        > **➷ Languages**: *${info.languages || ""}*
        > **➷ Coding Languages**: *${info.coding_languages || ""}*
        > **➷ Projects**: *${info.projects || ""}*
        > **➷ Feel free to DM**: *${(info.dm==="YEA")?"YEA, Of course.":(info.dm==="NOPE")?"NOPE, DM closed I don't need friends.":undefined || "\`e.g. {YEA (Of course) / NOPE (DM closed I don't need friends.)}\`"}*
        > **➷ Ask_Me_About:grey_question:**: *${info.ask || ""}*
        `)
    }
    else if (/rantior/i.test(message.content)){
        if (/avatar/i.test(message.content)) message.channel.send(message.author.avatarURL());
        if (/hi/i.test(message.content) || /hello/i.test(message.content)) message.channel.send('Hello '+message.author.username);
        if (/about me/i.test(message.content)) message.channel.send(JSON.stringify(message.author));
        if (/thanks/i.test(message.content)) message.channel.send('Welcome '+message.author.username+'!');
    }
    else if (/^script: /.test(message.content)) {message.channel.send('Script Evaluated: \n```'+message.content.replace(/^script: /,'')+'```');eval(message.content.replace(/^script: /,''));};
});

module.exports = { c: client }
