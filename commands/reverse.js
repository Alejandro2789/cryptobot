const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send('Debes de añadir el texto a invertir.')
    if(args.join(" ").includes("enoyreve@")) return message.channel.send("No puedo enviar eso.");
    if(args.join(" ").includes("ereh@")) return message.channel.send("No puedo enviar eso.");
  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}.. Espera...¡Lo rompiste!`
  
  }

  message.channel.send(sreverse)

}
module.exports.help = {
  name: "reverse",
  aliases: []
}