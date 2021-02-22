const Discord = require("discord.js");
var Weez = require("weez");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {


var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
let member = message.mentions.users.first();
if(!member) return message.channel.send(emoji.incorrecto + ` **${message.author.name},** Menciona a un usuario.`).then(m => m.delete(3000))
  
let img = await weez.basura(member.displayAvatarURL)

message.channel.send({files: [img]})
  
}
module.exports.help = {
  name: "basura",
  aliases: []
}