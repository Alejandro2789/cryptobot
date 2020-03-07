const Discord = require("discord.js");
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");

module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send("No tengo permisos.").then(m => m.delete(3000))
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<:incorrecto:558845297447403558> | No tienes los permisos necesarios.").then(m => m.delete(3000))
if(!args[0]) return message.channel.send(":no_entry_sign: | Nesecitas colocar el prefix a cambiar.").then(m => m.delete(3000))
     prefix_db.establecer(`${message.guild.id}`, args[0])
      var embed = new Discord.RichEmbed()
  .setTitle("**Prefix Set!**")
  .setColor("15f153")
  .setDescription("<:4888_yep:539596813737656330> **El prefix de este servidor ha sido cambiado a:** " +args[0])
  .setFooter("Nota: Si pierde su prefix mencione al bot.")
  .setTimestamp()
      
        message.channel.send({embed});

}
module.exports.help = {
  name: "setprefix",
  aliases: []
}