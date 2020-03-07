const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
module.exports.run = async (bot, message, args) => {
if(message.author.id !== "401083681923661825") return;
let usuario = message.mentions.members.first() || bot.users.get(args[0]);
  
creditos_profile.eliminar(usuario.id);
message.channel.send(`Los créditos de **${usuario.user.username}** han sido reiniciados.`)


  
}
module.exports.help = {
  name: "eliminar",
  aliases: []
}
