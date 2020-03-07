const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + ' = '  +  guild.memberCount  + '\n';})
    let bt = bot.user.username;
  
   
    message.channel.send(`<a:multi:521868478253236247> **Lista de servidores.\n-${bot.guilds.size} servidores.\n-${bot.users.size} usuarios.**\n\n\`\`\`${string}\`\`\``);
}

module.exports.help = {
    name: "servidores"
}