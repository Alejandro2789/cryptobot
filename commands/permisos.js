const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   const p = message.guild.member(bot.user).hasPermission("ADMINISTRATOR") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const pe = message.guild.member(bot.user).hasPermission("KICK_MEMBERS") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const per = message.guild.member(bot.user).hasPermission("BAN_MEMBERS") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const perm = message.guild.member(bot.user).hasPermission("READ_MESSAGES") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const permi = message.guild.member(bot.user).hasPermission("SEND_MESSAGES") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const permis = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const permiso = message.guild.member(bot.user).hasPermission("MUTE_MEMBERS") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const permisos = message.guild.member(bot.user).hasPermission("ADD_REACTIONS") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'
const permisoss = message.guild.member(bot.user).hasPermission("MANAGE_GUILD") ? '<a:con_permiso:718521877156593694>' :  '<a:sin_permiso:718521825784758345>'

 let embed = new Discord.RichEmbed()
 .setTitle(`<:list:702555554584723526> Lista de permisos para ${message.guild.name}.`)
 .setDescription(":star: Sí el emoji es el siguiente: <a:con_permiso:718521877156593694>, significa qué tiene el permiso, sí es este: <a:sin_permiso:718521825784758345>, significa qué no lo tiene.")
 .addField("• Administrator:", `${p}`)
 .addField("• Kick Members:", `${pe}`)
 .addField("• Ban Members:", `${per}`)
 .addField("• Read Messages:", `${perm}`)
 .addField("• Send Messages:", `${permi}`)
 .addField("• Manage Messages:", `${permis}`)
 .addField("• Mute Members:", `${permiso}`)
 .addField("• Add Reactions:", `${permisos}`)
 .addField("• Manage Guild:", `${permisoss}`)
  message.channel.send(embed)

}
module.exports.help = {
  name: "permisos",
  aliases: []
}