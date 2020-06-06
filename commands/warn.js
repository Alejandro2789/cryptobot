const Discord = require("discord.js");
const db = require("megadb");
let advertencias = new db.crearDB("advertencias");
const canal_mod = new db.crearDB("canales_mods");
const moment = require("moment");
require("moment-duration-format")
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

message.delete()
  
let letras = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "ñ" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
  
let numeros = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"];
  
  
let final_l_1 = letras[Math.floor(letras.length * Math.random())];
let final_l_2 = letras[Math.floor(letras.length * Math.random())];
  
let final_n_1 = numeros[Math.floor(numeros.length * Math.random())];  
let final_n_2 = numeros[Math.floor(numeros.length * Math.random())];  
  
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

  let usuario = message.mentions.members.first() || bot.users.get(args[0]);
  
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione el usuario a advertir.`);
  
let rol_autor = message.member.highestRole;
let rol_mencionado = usuario.highestRole;
if(rol_autor.position < rol_mencionado.position) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** El usuario mencionado tiene un rol mayor al tuyo.`)
  
  
  
if(usuario.id === message.author.id) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No te puedes advertir a ti mismo.`);
if(usuario.user.bot === true) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No puedes advertir a un bot.`)
if(usuario.id === "495758665391800321") return message.channel.send(emoji.incorrecto + ` **${message.author.username},** A mí no me puedes advertir.`)
let razon = args.slice(1).join(' ');
if(!razon) razon = "No especificada."
  

  


if(!advertencias.tiene(`${message.guild.id}.${usuario.id}`)){
  
advertencias.establecer(`${message.guild.id}.${usuario.id}`, [{ moderador: message.author.tag, razon : razon, codigo: `${final_n_1}${final_l_1}${final_n_2}${final_l_2}`, hora: require('moment')().format('DD/MM/YYYY HH:mm') }])
 
  const warnEmbed = new Discord.RichEmbed()
  .setDescription(`**${usuario.user.username}** ha sido advertido.\nRazón: **${razon}**`)
  .setColor("#008363")
  .setFooter(`• ID ${final_n_1}${final_l_1}${final_n_2}${final_l_2}`)
  message.channel.send(warnEmbed)
  
}else{
   advertencias.push(`${message.guild.id}.${usuario.id}`, { moderador: message.author.tag, razon: razon, codigo: `${final_n_1}${final_l_1}${final_n_2}${final_l_2}`, hora: require('moment')().format('DD/MM/YYYY HH:mm') } )
   
  const warnEmbed = new Discord.RichEmbed()
  .setDescription(`**${usuario.user.username}** ha sido advertido.\nRazón: **${razon}**`)
  .setFooter(`• ID ${final_n_1}${final_l_1}${final_n_2}${final_l_2}`)
  .setColor("#008363")
  message.channel.send(warnEmbed)
}
  
 if(!canal_mod.tiene(message.guild.id)) return;
  let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
  let canal = message.guild.channels.get(c)
  
  
  const embed = new Discord.RichEmbed()
  .setTitle(":warning: Usuario Advertido.")
  .setColor("RED")
  .addField("▸ Usuario:", `${usuario.user.username} (**${usuario.id}**)`)
  .addField("▸ Staff:", `${message.author.username} (**${message.author.id}**)`)
  .addField("▸ Razón:", razon)
  .seFooter(`• ID ${final_n_1}${final_l_1}${final_n_2}${final_l_2}`)
  canal.send(embed);
  
}
module.exports.help = {
  name: "warn",
  aliases: ["advertir"]
}
