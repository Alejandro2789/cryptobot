const Discord = require("discord.js");
const db = require('megadb');
let creditos_profile = new db.crearDB('cantidad_creditos');
const dgestor = require('discord-gestor');
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

var conv = (dinero) => String(dinero).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  
 

  if (usuario.user.bot === true) return message.channel.send(emoji.incorrectoGif + ` **${message.author.name},** Los bots no tienen créditos.`).then(m => m.delete(2000))
  
  if(!creditos_profile.tiene(usuario.id)) return message.channel.send(`${usuario.user.tag} tiene **$0** créditos.`)
  
  creditos_profile.obtener(usuario.id).then(cantidad => {
 message.channel.send(`:dollar:  | ${usuario.user.tag} tiene **$${conv(cantidad)}** créditos.`)
  })
  
  }
module.exports.help = {
  name: "balance",
  aliases: ["bal", "cash", "money", "dinero"]
}