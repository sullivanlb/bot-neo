const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let argsInCap = args;
    for (let i = 0; i < args.length; i++){
        argsInCap[i] = args[i].toUpperCase();
    }

    if (message.member.displayName == undefined){
        message.channel.send("Tout nom est chelou, change moi ça !")
    }else{
        if (!(args == "")){
            console.log(argsInCap)
            if (argsInCap == "CLEAR"){
                const regex = new RegExp("^\\[\\S*\\]\\s"); // match everything between []
                message.member.setNickname(message.member.displayName.replace(regex, ''));
            }else if (argsInCap == "HELP"){
                const messageEmbed = new Discord.MessageEmbed()
                    .setColor("#b82bff")
                    .setTitle("Menu d'aide")
                    .setDescription("Utilisation de la commande `.status` : ")
                    .addField("Utilisation", "- `.status <status>` : affiche [<status>] à gauche de ton pseudo\r\n" + 
                                            "- ex : `.status afk` : ton pseudo devient \"[AFK] <pseudo>\"\r\n" + 
                                            "- `.status clear` : enlève le status précedemment ajouté sur ton pseudo\r\n")
                    .setTimestamp()
                    .setFooter("By Scipio");
                
                message.channel.send(messageEmbed);
            }else{
                if (!message.member.displayName.includes(args)){
                    message.member.setNickname("[" + args + "] " + message.member.displayName);
                }else{
                    message.channel.send("T'as déjà ce status.")
                }
            }
        }else{
            message.channel.send("Dis moi après la commande quel statut tu veux (ex : .status afk).")
        }
    }
};