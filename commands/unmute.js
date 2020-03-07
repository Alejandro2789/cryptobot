const Discord = require("discord.js");
const db = require("megadb");
const rolemute = new db.crearDB("rolemute");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
message.delete();
  
if(!rolemute.tiene(message.guild.id)) return message.channel.send("El servidor no cuenta con el rol de usuarios silenciados, añadalo con el comando `rolemute` y vuelva a intentar.")
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

let roleemute = rolemute.tiene(message.guild.id) ? await rolemute.obtener(message.guild.id) : "Sin rol.";
  
let usuario = message.mentions.members.first() || bot.users.get(args[0]);
if(!usuario) return message.channel.send("Mencione al usuario a cuál vas a  desmutear.")
  
if(!usuario.roles.has(roleemute)) return message.channel.send("El usuario no se encuentra muteado.") 
  
usuario.removeRole(roleemute).then(() => {
message.channel.send(`<:correcto:558845268800307229> El usuario ${usuario} ah sido desmuteado correctamente.`)
  }).catch(e => {
    message.channel.send("<:incorrecto:558845297447403558> " + message.author + " Por cuestión de permisos no puedo removerle el rol al usuario.")
    
})
}
module.exports.help = {
  name: "unmute",
  aliases: []
}
