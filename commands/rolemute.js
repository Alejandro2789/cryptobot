const Discord = require("discord.js");
const db = require("megadb");
const rolemute = new db.crearDB("rolemute");
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {
 

if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
let rolmute = message.mentions.roles.first() || message.guild.roles.find(x => x.id === args[0]);
if(!rolmute) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username},** Mencione un rol válido.`);
  
message.channel.send(emoji.correcto + ` Listo!\nEl nuevo rol qué se agregará a los usuarios silenciados será ${rolmute}.`)
rolemute.establecer(message.guild.id, rolmute.id)
}
module.exports.help = {
  name:"rolemute",
  aliases:""
}