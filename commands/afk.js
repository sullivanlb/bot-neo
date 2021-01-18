module.exports = (client, message) => {
    if (message.member.displayName == undefined){
        client.sendMessage(message.channel, "Tout nom est chelou, change moi ça !");
    }else{
        if (!message.member.displayName.includes("AFK")){
            message.member.setNickname("[AFK] " + message.member.displayName);
        }else{
            message.member.setNickname(message.member.displayName.replace('[AFK] ', ''));
        }
    }
};