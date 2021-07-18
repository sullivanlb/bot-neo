const Discord = require('discord.js');

console.log("help called")

module.exports = (client, message) => {
    const messageEmbed = new Discord.MessageEmbed()
        .setColor("#b82bff")
        .setTitle("Menu d'aide de Neo")
        .setDescription("Mon préfix est `.`")
        //.setThumbnail("https://imgur.com/a/iPN4UtZ")
        .addField("Commandes", "- `afk` : affiche [AFK] à gauche de ton pseudo\r\n" + 
                                "- `tg` <mention> : Je vais faire taire la personne que tu mentionnes\r\n" + 
                                "- `rand` <min> <max> : Je vais te retourner un nombre entre [ min ; max ]")
        .setTimestamp()
        .setFooter("By Scipio");
                

    message.channel.send(messageEmbed);
};