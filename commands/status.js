module.exports = (client, message, args) => {
    let argsInCap = args;
    for (let i = 0; i < args.length; i++){
        argsInCap[i] = args[i].toUpperCase();
    }

    if (message.member.displayName == undefined){
        message.channel.send("Tout nom est chelou, change moi ça !")
    }else{
        if (!(args == "")){
            if (argsInCap == "CLEAR"){
                const regex = new RegExp("^\\[\\S*\\]\\s"); // match everything between []
                message.member.setNickname(message.member.displayName.replace(regex, ''));
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