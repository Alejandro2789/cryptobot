const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

message.delete();
if(message.author.id !== "401083681923661825") return;
let miembro = message.mentions.members.first() || bot.users.get(args[0]);
let creditos = parseInt(args[1]);
  
if(!creditos_profile.tiene(miembro.id)){
  creditos_profile.establecer(miembro.id, creditos)
  message.channel.send(emoji.correcto + ` **$${args[1]} créditos** añadidos a ${miembro.user.username}!`)
}else{
  creditos_profile.sumar(miembro.id, creditos)
  message.channel.send(emoji.correcto + ` **$${args[1]} créditos** añadidos a ${miembro.user.username}!`)
}

  
}
module.exports.help = {
  name: "add",
  aliases: []
}
