const Discord = require('discord.js');

module.exports = (client, message) => {
    const messageEmbed = new Discord.MessageEmbed()
        .setColor("#b82bff")
        .setTitle("Menu d'aide de Neo")
        .setDescription("Mon préfix est `.`")
        //.setThumbnail("https://imgur.com/a/iPN4UtZ")
        .addField("Commandes", "- `status` <status> : affiche [<status>] à gauche de ton pseudo (`.status help` pour plus d'infos)\r\n" + 
                                "- `tg` <mention> : Je vais faire taire la personne que tu mentionnes\r\n" + 
                                "- `rand` <min> <max> : Je vais te retourner un nombre entre [ min ; max ]\r\n" + 
                                "- `roulette` <help|join|clear|queue|start> : On joue à la roulette russe et la personne choisie est kick du serveur" + 
                                "- `.spam` <mention> <number>: le robot va spammer la personne mentionnée un nombre donné de fois")
        .setTimestamp()
        .setFooter("By Scipio");
                

    message.channel.send(messageEmbed);
};