const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
           
           const usuario = message.mentions.members.first();
  if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione al usuario a remover el rol.`)
  
  const rol = args.slice(1).join(" ");
  let role = message.guild.roles.find(role => role.name === rol);
  if(!role) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione un rol válido.`)
  usuario.removeRole(role).catch(console.error)
  
  const embed = new Discord.RichEmbed()
  .setTitle("Rol removido.")
  .setColor("RANDOM")
  .setDescription(`<:correcto:558845268800307229> | El rol ${role} se le a removido al usuario.`)
  message.channel.send(embed)

}
module.exports.help = {
  name: "remover",
  aliases: []
}