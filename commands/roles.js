const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
let id = message.guild.id;
  const embed = new Discord.RichEmbed()
  .setTitle('Lista de roles de: '+ message.guild.name)
    .setColor(0x00AE86)
    .setDescription(`${bot.guilds.get(id).roles.map(r => r.name).join(" , ")}`)
    .setFooter('Numero de roles: '+ message.guild.roles.size);
    
message.channel.send({embed});
}
module.exports.help = {
  name: "roles",
  aliases: []
}