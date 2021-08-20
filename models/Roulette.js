const mongoose = require("mongoose");

const rouletteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: Array,
})

module.exports = mongoose.model("Roulette", rouletteSchema);