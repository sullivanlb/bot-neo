module.exports = (client, message, args) => {

    if(args[0] != undefined && args[1] != undefined){
        let rand = Math.floor(Math.random() * (args[1] - args[0]) + args[0])
        message.channel.send("Le nombre est : " + rand)
    }
    else{
        message.channel.send("Donne moi deux arguments, un nombre minimum et un nombre maximum (ex : `.rand 0 10` --> chiffre aléatoire entre 0 et 10)")
    }
}