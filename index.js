const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "."

bot.on('ready', function() {
    console.log("Connecté")
})

bot.login("process.env.TOKEN");

bot.on('message', message => {

    if (message.content.startsWith (prefix + "avatar")) {

    const user = message.mentions.users.first();

    var avatar = new Discord.RichEmbed()
    .setDescription("**Avatar Discord**")
    .setColor("RANDOM")
    .addField(`Avatar`, `[Download](${user.avatarURL})`)
    .setImage(user.avatarURL)
    message.channel.send(avatar)
    console.log("Commande avatar éffectuée.")
};

    if (message.author.id == "521450927471722516"){if(message.content === prefix + "cheh") {
    message.channel.send("https://media1.tenor.com/images/16eb23085c714f850a914af903a871d4/tenor.gif?itemid=12323680")
    console.log("Commande cheh effectuée.")};
}

if (message.author.id == "521450927471722516"){if(message.content === prefix + "ledrame") {
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
        message.channel.send("SPAM");
    }};
});
