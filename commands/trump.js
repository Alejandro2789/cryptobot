const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

      var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
     let texto = args.join(" ");
  if(!texto) return message.channel.send("Ingrese la nueva ley.")
  
  let img = await weez.trump(texto)

  message.channel.send({files: [img]})

}
module.exports.help = {
  name: "trump",
  aliases: []
}