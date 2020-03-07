const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
  let member = message.mentions.users.first();
   if(!member) return message.channel.send("<:incorrecto:558845297447403558> | Mencioné a un usuario.").then(m => m.delete(3000))
 if(member.id === message.author.id) return message.channel.send("Mencioné a otro usuario.")

  
  let img = await weez.coche(message.author.displayAvatarURL, member.displayAvatarURL)

  message.channel.send({files: [img]})
     

}
module.exports.help = {
  name: "coche",
  aliases: []
}