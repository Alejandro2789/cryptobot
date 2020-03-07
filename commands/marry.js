const Discord = require("discord.js");
const db = require('megadb');
let casado = new db.crearDB('esposo_profile');

module.exports.run = async (bot, message, args) => {
  
let esposo = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!esposo) return message.channel.send("Mencione a su nuev@ espos@.")
if (esposo.user.bot) return message.channel.send('No te puedes casar con un bot.')
if(esposo.id === message.author.id) return message.channel.send("Mencione a otro usuario.")
  
casado.establecer(message.author.id, esposo.id);
message.channel.send(`:heartpulse: | ${message.author.tag} se a casado con ${esposo.user.tag}!`)


}
module.exports.help = {
  name: "marry",
  aliases: []
}