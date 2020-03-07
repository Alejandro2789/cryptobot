const Discord = require("discord.js");
const db = require('megadb');
let descripción = new db.crearDB('descripciones_profile');

module.exports.run = async (bot, message, args) => {

if(!descripción.tiene(message.author.id)) return message.channel.send(":anger: | Usted no tiene descripción para eliminar!").then(m => m.delete(3000))

  
else{
    descripción.eliminar(message.author.id)
message.channel.send(":white_check_mark: | Su descripción se a eliminado.")
  }
}
module.exports.help = {
  name: "del_description",
  aliases: []
}