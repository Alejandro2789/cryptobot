const Discord = require("discord.js");
const db = require("megadb");
const limite = new db.crearDB("limite");
module.exports.run = async (bot, message, args) => {
/*
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:incorrecto:558845297447403558> | No tienes los permisos necesarios.")
let kickL = parseInt(args[0])
if(!kickL) return message.channel.send("Ingrese el número de advertencias para ser kickeado.")
if(isNaN(kickL)) return message.channel.send("Solo números.")
  
limite.establecer(message.guild.id, {kick: kickL})
message.channel.send(`:white_check_mark: Los usuarios serán kickeados a las **${kickL}** advertencias.`)
*/
}
module.exports.help = {
  name: "wkick",
  aliases: ["limite_warns" , "limite"]
}
