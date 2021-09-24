module.exports = (client, message, args) => {
    if ((args[0] === undefined) || (args[1] === undefined)){
        message.channel.send("Il me manque au moins un argument.");
    }else{

        if (!typeof args[1] === "number"){
            message.channel.send("Le deuxième argument doit être un nombre.");
        }else{
            if (args[1] > 50){
                message.channel.send("T'abuses un peu, je limite à 50.")
                args[1] = 50;
            }
            for (let i = 0; i < args[1]; i++) {
                message.channel.send(args[0]);
            }
        }

        
    }
};