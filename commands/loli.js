const Discord = require("discord.js");
let cooldown= new Set();

module.exports.run = async (bot, message, args) => {

  if(cooldown.has(message.author.id)){
   message.channel.send(message.author.username+ " :stopwatch: __Cooldown__ espere **5 segundos** para volver a utilizar el comando!");
   return;
}

cooldown.add(message.author.id);


setTimeout(() => {
  cooldown.delete(message.author.id);
}, 5000);
   
    var Weez = require("weez");
var weez = new Weez.WeezAPI("8S0TVYhybBtPks4qYJp7zPoNwhigiBMK9uvY");
let link = await weez.randomLoli()
 
let embed = new Discord.RichEmbed()
.setImage(link);
message.channel.send(embed)
  
}
module.exports.help = {
  name: "loli",
  aliases: []
}