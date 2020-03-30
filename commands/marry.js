const Discord = require("discord.js");
const db = require('megadb');
let casado = new db.crearDB('esposo_profile');
let anilloo = new db.crearDB("anillos");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
  
let esposo = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!esposo) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione a su nuev@ espos@.`)
if (esposo.user.bot) return message.channel.send(emoji.incorrecto + 'No te puedes casar con un bot.')
if(esposo.id === message.author.id) return message.channel.send("Mencione a otro usuario.")
  
//if(anilloo.length < 1) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** no cuentas con ningún anillo en tú inventario.`);
//anilloo.restar(message.author.id, 1);
casado.establecer(message.author.id, esposo.id);
message.channel.send(`:heartpulse: | ${message.author.tag} se a casado con ${esposo.user.tag}!`)


}
module.exports.help = {
  name: "marry",
  aliases: []
}