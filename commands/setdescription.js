const Discord = require("discord.js");
const db = require('megadb');
let descripción = new db.crearDB('descripciones_profile');

module.exports.run = async (bot, message, args) => {

const descripcion = args.join(" ");
  if(!descripcion) return message.channel.send("Ingrese la nueva descripción.").then(m => m.delete(3000))

if(descripción.tiene(message.author.id)) return message.channel.send("Primero elimine la actual descripción. `del_description`").then(m => m.delete(3000))
  
if(!descripción.tiene(message.author.id)){
   descripción.establecer(message.author.id, descripcion);
}
  
message.channel.send(`:white_check_mark: | Su descripción fue cambiada a: **${descripcion}**`)

}
module.exports.help = {
  name: "set_description",
  aliases: []
}
