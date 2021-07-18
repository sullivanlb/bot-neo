const Discord = require("discord.js");
// const config = require("./config.json");
const { Collection } = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const express = require('express')
const app = express()

// client.PREFIX = config.PREFIX;
client.PREFIX = process.env.PREFIX;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});

client.commands = new Collection();
client.commands.set("afk", require("./commands/afk.js"));
client.commands.set("tg", require("./commands/tg.js"));
client.commands.set("help", require("./commands/help.js"));
client.commands.set("rand", require("./commands/rand.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", (message) => require("./events/message.js")(client, message));

// client.login(config.BOT_TOKEN);
client.login(process.env.BOT_TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);