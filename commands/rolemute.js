const Discord = require("discord.js");
const db = require("megadb");
const rolemute = new db.crearDB("rolemute");
module.exports.run = async(bot, message, args) => {
 
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("No tengo permisos.");
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:incorrecto:558845297447403558> | No tienes los permisos necesarios.");
  
let rolmute = message.mentions.roles.first() || message.guild.roles.find(x => x.id === args[0]);
if(!rolmute) return message.channel.send("Mencione un rol válido.");
  
message.channel.send(`<:correcto:558845268800307229> Listo!\nEl nuevo rol qué se agregará a los usuarios silenciados será ${rolmute}.`)
rolemute.establecer(message.guild.id, rolmute.id)
}
module.exports.help = {
  name:"rolemute",
  aliases:""
}