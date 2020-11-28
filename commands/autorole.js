const Discord = require("discord.js");
const db = require("megadb");
const auto = new db.crearDB("autorole");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`)
  
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
if(!role) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** Mencione el rol a agregar al autorole.`)
let nombre_rol = role.name;
  

message.channel.send(emoji.correcto + ` **Datos almacenados!**\nEl nuevo autorole será: ${role}`)
auto.establecer(message.guild.id, {autorole: role.id, nombre: nombre_rol})

    
  
}
module.exports.help = {
  name: "autorole",
  aliases: []
}