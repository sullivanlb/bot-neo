const mongoose = require("mongoose");

const rouletteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserID1: String,
    UserID2: String,
    UserID3: String,
    UserID4: String,
    UserID5: String,
    UserID6: String,
    UserID7: String,
    UserID8: String,
    UserID9: String,
    UserID10: String,
    UserID11: String,
    UserID12: String,
})

module.exports = mongoose.model("Roulette", rouletteSchema);