const mongoose = require("mongoose");
const Roulette = require("../models/Roulette.js");
const connection_url = process.env.CONNECTION_STRING;
const Discord = require('discord.js');

module.exports = async (client, message, args) => {
    mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("we're connected !")
    });

        let lastDocID;
        let nbDocs;
        let roulette;

        await Roulette.countDocuments({}, function (err, count) {
            if(err) return console.log(err);
            nbDocs = count;
        });

        if (args[0] != undefined){
            if (nbDocs > 0){
                roulette = await Roulette.find({}, function (err, docs) {
                    if(err) return console.log(err);
                });
                roulette = roulette[0];
            }else{
                roulette = new Roulette({
                    _id: mongoose.Types.ObjectId(),
                    username: []
                })
            }

            if (args[0].toUpperCase() == "START") {
                if(roulette.username.length < 1){
                    message.channel.send("Il n'y a pas assez de participants pour commencer.");
                }else{
                    for (let i = 0; i < roulette.username.length; i++) {
                        let rand = Math.floor(Math.random() * ((parseInt(roulette.username.length - 1) + 1)))
                        console.log(rand);

                        // if (i == 0) message.channel.send("Commençons par " + roulette);
                    }

                    // roulette.username = [];
                }
            }

            if (args[0].toUpperCase() == "JOIN") {
                let exist = false;
                for (let i = 0; i < roulette.username.length; i++) {
                    if (roulette.username[i].toUpperCase() == message.author.username.toUpperCase()){
                        exist = true;
                    }
                }
                
                if (!exist) roulette.username.push(message.author.username);
                else message.channel.send("T'es déjà inscrit toi");
            }

            if (args[0].toUpperCase() == "CLEAR") roulette.username = [];

            if (args[0].toUpperCase() == "QUEUE"){
                if (roulette.username.length == 0){
                    message.channel.send("Il n'y a aucun participant, faites pas vos zoulettes");
                }else{

                    let participants = "";
                    for (let i = 0; i < roulette.username.length; i++) {
                        participants += "- " + roulette.username[i] + "\r\n";
                    }

                    const messageEmbed = new Discord.MessageEmbed()
                        .setColor("#b82bff")
                        .setTitle("File d'attente Roulette Russe")
                        .addField("Participant(s) : \r\n", participants)
                        .setTimestamp()
                        .setFooter("By Scipio");

                    message.channel.send(messageEmbed);
                }
            }

            if (args[0].toUpperCase() == "HELP") {
                const messageEmbed = new Discord.MessageEmbed()
                        .setColor("#b82bff")
                        .setTitle("Roulette Russe")
                        .setDescription("Utilisation de la commande `.roulette` : ")
                        .addField("Règles : ", "Nous avons un revolver et une balle chargée. \r\n" + 
                                                "A tour de rôle chaque joueur se tire dessus, \r\n" +
                                                "celui qui reçoit la balle est kick.")
                        .addField("Argument(s) : \r\n", "- `join` : permet à un joueur de participer\r\n" + 
                                    "- `clear` : retire tous les participants\r\n" + 
                                    "- `start` : commence le jeu\r\n" + 
                                    "- `queue` : affiche les participants\r\n" + 
                                    "- `help` : affiche ce menu\r\n")
                        .addField("Exemple : ", "`.roulette queue`")
                        .setTimestamp()
                        .setFooter("By Scipio");

                    message.channel.send(messageEmbed);
            }
        }
        else{
            message.channel.send("j'ai besoin d'arguments gros con");
        }

        // get all docs id
        await Roulette.find({}, '_id').exec()
        .then(function(res) {
            lastDocID = res;
        });

        //save the changes
        roulette.save(function(err) {
            if(err){
                console.log(err);
                return;
            }
        });

        // delete the useless docs
        // if (nbDocs > 0){
        //     for (let i = 0; i < lastDocID.length; i++) {
        //         await Roulette.deleteOne({_id: lastDocID[i]._id}, function(err) {
        //             if(err){
        //                 console.log(err);
        //             }

        //             console.log("deleted");
        //         });
        //     }
        // }
}