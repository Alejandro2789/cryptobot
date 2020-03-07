const Discord = require("discord.js");
var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");

module.exports.run = async (bot, message, args) => {

   
let link = await weez.randomMeme()

//Preferible mandarlo en un Embed ya que la respuesta es un link<br>

let meme = new Discord.RichEmbed()

.setImage(link)
.setFooter("Cortesía de Weez.")
message.channel.send(meme)

}
module.exports.help = {
  name: "meme",
  aliases: []
}