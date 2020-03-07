const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("```Permisos insuficientes.\n=======================\nRequiere: MANAGE_NICKNAMES```")
 if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Necesito el permiso `MANAGE_NICKNAMES` para editar el nick del usuario.")

   var server = message.guild;
 let usuario = message.mentions.members.first();
  if(!usuario) return message.channel.send("<:incorrecto:558845297447403558> | Mencione a un usuario.")
  const nick = args.slice(1).join(" ")
  if(!nick) return message.channel.send("<:incorrecto:558845297447403558> | Ingrese el nuevo apodo.")
  if(usuario.id === server.owner.user.id) return message.channel.send("No puedo cambiarle el nick al owner.")
  usuario.setNickname(`${nick}`)

  const embed = new Discord.RichEmbed()
  .setTitle("Nick cambiado.")
  .setColor("RANDOM")
  .setDescription(`<:correcto:558845268800307229> | El nick de ${usuario} a sido cambiado a: ${nick}`).catch(console.log)
  message.channel.send(embed)

}
module.exports.help = {
  name: "nick",
  aliases: []
}