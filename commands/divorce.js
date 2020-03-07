const Discord = require ("discord.js");
const db = require("megadb");
const casado = new db.crearDB("esposo_profile");
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {

if(!casado.tiene(message.author.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** usted no se encuentra casado!`);
  
casado.eliminar(message.author.id);
  
message.channel.send(emoji.correcto + ` **${message.author.username},** usted se ha divorciado correctamente. Lamento esa ruptura! 💔`);
}
module.exports.help = {
  name: "divorce"
}