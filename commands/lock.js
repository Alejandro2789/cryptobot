const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

   
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
    
  let role = message.guild.roles.find(m => m.name === '@everyone')
    let canal = message.channel;
  
  canal.overwritePermissions(role, {
    SEND_MESSAGES : false,
    ADD_REACTIONS : false
  })
 message.channel.send("**:lock: | Canal bloqueado con éxito.**")
  
}
module.exports.help = {
  name: "lock",
  aliases: []
}