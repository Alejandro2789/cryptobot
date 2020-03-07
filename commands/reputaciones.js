const Discord = require("discord.js");
const db = require('megadb');
let reps_profile = new db.crearDB('reputaciones');

module.exports.run = async (bot, message, args) => {
  
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (usuario.user.bot) return message.channel.send('Los bots no tienen reputaciones.').then(m => m.delete(3000));

if(!reps_profile.tiene(usuario.id)) return message.channel.send(`:diamond_shape_with_a_dot_inside: ${usuario.user.tag} tiene **0** puntos de reputación.`)
  
reps_profile.obtener(usuario.id).then(cantidad => {
 message.channel.send(`:diamond_shape_with_a_dot_inside:  | ${usuario.user.tag} tiene **${cantidad}** puntos de reputación.`)
  })
  }

module.exports.help = {//:diamond_shape_with_a_dot_inside: 
  name: "reputaciones",
  aliases: []
}
/*
const Discord = require("discord.js");
const db = require('megadb');
let creditos_profile = new db.crearDB('cantidad_creditos');
const dgestor = require('discord-gestor');

module.exports.run = async (bot, message, args) => {
  
let usuario = message.mentions.members.first() || message.member;
  
 

  if (usuario.user.bot === true) return message.channel.send(":anger: | Los bots no tienen créditos.").then(m => m.delete(2000))
  
    if(!creditos_profile.tiene(usuario.id)) return message.channel.send(`${usuario.user.tag} tiene **$0** créditos.`)
  
  creditos_profile.obtener(usuario.id).then(cantidad => {
 message.channel.send(`:dollar:  | ${usuario.user.tag} tiene **$${cantidad}** créditos.`)
  })
  
  }
module.exports.help = {
  name: "balance",
  aliases: ["bal", "cash", "money", "dinero"]
}
*/