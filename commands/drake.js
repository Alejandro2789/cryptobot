const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
        let member = message.mentions.users.first();
 if(!member) return message.channel.send("<:incorrecto:558845297447403558> | Mencioné a un usuario.").then(m => m.delete(3000))
  
  let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)

  message.channel.send({files: [img]})

}
module.exports.help = {
  name: "drake",
  aliases: []
}