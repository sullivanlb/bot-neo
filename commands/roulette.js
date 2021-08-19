const roulette = require("./models/roulette.js");
const mongoose = require("mongoose");
const roulette = require("../models/Roulette.js");

module.exports = (client, message, args) => {
    mongoose.connect('mongodb://localhost/roulette')

    if (args[0] != undefined){
        if (args[0].toUpperCase() == "JOIN"){

        }
    }
    else{
        message.channel.send("");
    }

    const roulette = new Roulette({
        _id: 
    });

}