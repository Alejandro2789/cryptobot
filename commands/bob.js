const Discord = require("discord.js");
var Weez = require("weez");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

      
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
let miembro = message.mentions.users.first();
  
if (!miembro) {
let img = await weez.bob(message.author.displayAvatarURL)

message.channel.send({files: [img]})

} else {
let img = await weez.bob(miembro.displayAvatarURL)
message.channel.send({files: [img]})
 
}

}
module.exports.help = {
  name: "bob",
  aliases: []
}