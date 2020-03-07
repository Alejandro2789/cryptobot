const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   const p = message.guild.member(bot.user).hasPermission("ADMINISTRATOR") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const pe = message.guild.member(bot.user).hasPermission("KICK_MEMBERS") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const per = message.guild.member(bot.user).hasPermission("BAN_MEMBERS") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const perm = message.guild.member(bot.user).hasPermission("READ_MESSAGES") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const permi = message.guild.member(bot.user).hasPermission("SEND_MESSAGES") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const permis = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const permiso = message.guild.member(bot.user).hasPermission("MUTE_MEMBERS") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const permisos = message.guild.member(bot.user).hasPermission("ADD_REACTIONS") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'
const permisoss = message.guild.member(bot.user).hasPermission("MANAGE_GUILD") ? '<:ol:541811896156684319>' :  '<:off:541811856252076042>'

 let embed = new Discord.RichEmbed()
 .setTitle(`<:modules:647180664470241303> Lista de permisos para ${message.guild.name}.`)
 .addField("Administrator", `${p}`)
 .addField("Kick Members", `${pe}`)
 .addField("Ban Members", `${per}`)
 .addField("Read Messages", `${perm}`)
 .addField("Send Messages", `${permi}`)
 .addField("Manage Messages", `${permis}`)
 .addField("Mute Members", `${permiso}`)
 .addField("Add Reactions", `${permisos}`)
 .addField("Manage Guild", `${permisoss}`)
  message.channel.send(embed)

}
module.exports.help = {
  name: "permisos",
  aliases: []
}