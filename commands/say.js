const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
let botmessage = args.join(" ");
 if(!botmessage) return message.channel.send("Ingrese los argumentos a enviar.")
if(args.join(" ").includes("@here")) return message.channel.send("No puedo enviar eso.");
if(args.join(" ").includes("@everyone")) return message.channel.send("No puedo enviar eso.");
  message.delete().catch();
  message.channel.send(botmessage);
  
}
module.exports.help = {
  name: "say",
  aliases: []
}