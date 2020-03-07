const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

     var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
      let miembro = message.mentions.users.first();
  
  if (!miembro) {
    let img = await weez.susto(message.author.displayAvatarURL)

  message.channel.send({files: [img]})

} else {
let img = await weez.susto(miembro.displayAvatarURL)
message.channel.send({files: [img]})
 
}

}
module.exports.help = {
  name: "susto",
  aliases: []
}