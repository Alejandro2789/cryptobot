const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

   

randomPuppy().then(url =>{
  
const embed = new Discord.RichEmbed()
.setTitle("Perro 🐶")
.setColor("#7289DA")
  .setImage(url);
  
  message.channel.send(embed)
     // message.channel.send(url);
      
}).catch(err => message.channel.send(":warning: | **Hubo un error, inténtelo nuevamente.**"));

}
module.exports.help = {
  name: "dog",
  aliases: []
}