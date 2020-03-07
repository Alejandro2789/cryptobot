const Discord = require("discord.js");
const db = require("megadb");
const medallas = new db.crearDB("medallas");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

message.delete();
if(message.author.id !== "401083681923661825") return;
  
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
  
if(!medallas.tiene(usuario.id)){
  medallas.set(usuario.id, [{medalla: args[1]}])
}else{
  medallas.push(usuario.id, {medalla: args[1]})
}
  
message.channel.send(`${emoji.correcto} Se le añadió la medalla ${args[1]} a el usuario **${usuario.user.username}.**`);


}
module.exports.help = {
  name: "addmedalla",
  aliases: []
}
