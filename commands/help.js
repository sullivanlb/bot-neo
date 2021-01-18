const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');

module.exports = (client, message) => {
    const messageEmbed = new Discord.MessageEmbed()
        .setColor("#b82bff")
        .setTitle("Menu d'aide de Neo")
        .setDescription("Mon préfix est `.`")
        //.setThumbnail("https://imgur.com/a/iPN4UtZ")
        .addField("Commandes", " - `afk` : affiche [AFK] à gauche de ton pseudo\r\n- `tg` <mention> : Je vais faire taire la personne que tu mentionnes")
        .setTimestamp()
        .setFooter("By Scipio");
                

    message.channel.send(messageEmbed);
};