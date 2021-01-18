module.exports = (client, message, args) => {
    message.delete()

    let test = false;
    const str = ["Scipio", "Sullivan", "@Scipio", "Scip", "Sulli", "Sull", "<@!329338532042768387>", "Scipioo"];
    for (let i = 0; i < str.length; i++){
        if (str[i] == args) test = true;
    }

    if (!(args == "")){
        if (!test){
            let rand = Math.floor(Math.random() * Math.floor(10))
            console.log(rand)
            switch(rand) {
                case 0:
                    message.channel.send(args + " tu fermes ta gueule !")
                    break;
                case 1:
                    message.channel.send("Allez on t'a assez entendu " + args + ".")
                    break;
                case 2:
                    message.channel.send(args + " on s'en fout.")
                    break;
                case 3:
                    message.channel.send("Tu parles trop " + args + ".")
                    break;
                case 4:
                    message.channel.send("Ça devient chiant là " + args + ", tais toi un peu.")
                    break;
                case 5:
                    message.channel.send(args + " shhhhhhhhhhh !")
                    break;
                case 6:
                    message.channel.send(args + " arrête de jaspiner !")
                    break;
                case 7:
                    message.channel.send(args + " qu'est-ce tu baragouines là ? Ferme la s'il te plaît.")
                    break;
                case 8:
                    message.channel.send(args + " va bafouiller ailleurs.")
                    break;
                case 9:
                    message.channel.send("Allez " + args + " on se tait et on va jouer aux cartes.")
                    break;
            }
        }else{
            message.channel.send("Je ne peut pas il est trop fort...")
        }
    }else{
        message.channel.send("Mentionne la personne que tu veux faire taire après la commande.")
    }
}