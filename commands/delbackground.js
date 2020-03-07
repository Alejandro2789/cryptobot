const Discord = require("discord.js");
const db = require("megadb");

let background = new db.crearDB("fondos_profile")

module.exports.run = async (bot, message, args) => {

if(!background.tiene(message.author.id)){
  message.channel.send("Usted no tiene ningún background equipado.")
}

if(background.tiene(message.author.id)){
  background.eliminar(message.author.id)
  message.channel.send(":white_check_mark: | Has eliminado el background correctamente.")
}
}
module.exports.help = {
  name: "del_bc",
  aliases: []
}
