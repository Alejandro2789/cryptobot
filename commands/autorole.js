const Discord = require("discord.js");
const db = require("megadb");
const auto = new db.crearDB("autorole");
module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("No tengo permisos.")
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:incorrecto:558845297447403558> | No tienes los permisos necesarios.")
  
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
if(!role) return message.channel.send("Mencione el rol a agregar al autorole.")
let nombre_rol = role.name;
  

message.channel.send(`<:correcto:558845268800307229> **Datos almacenados!**\nEl nuevo autorole será: ${role}`)
auto.establecer(message.guild.id, {autorole: role.id, nombre: nombre_rol})

    
  
}
module.exports.help = {
  name: "autorole",
  aliases: []
}