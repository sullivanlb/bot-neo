module.exports = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(client.PREFIX)) return;
        
    const commandBody = message.content.slice(client.PREFIX.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase(); 

    if (client.commands.has(command)) client.commands.get(command)(client, message, args);
};