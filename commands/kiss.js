const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {

let user = message.mentions.members.first();
if(!user)  return message.channel.send("Menciona a un usuario.").then(m => m.delete(3000));
 
if(message.author.id === user.id) return message.channel.send("¿Porqué te quieres besar a ti mismo?").then(m => m.delete(3000));
  
  
let { body } = await superagent.get("https://nekos.life/api/kiss");
let link = body.url;
  
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.username} besó a ${user.user.username}**`)
.setImage(link)

message.channel.send(embed)
}
module.exports.help = {
  name: "kiss",
  aliases: []
}
