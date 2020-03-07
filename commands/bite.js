const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
 let member = message.mentions.members.first();  
    let bite = ["https://pa1.narvii.com/6518/2edd1527a1eec197b537d6a6719b8c5ba445374e_hq.gif",
                  "https://pa1.narvii.com/6547/3b0256b46869d86c221a3df4a161bf874d3ab017_hq.gif",
                  "https://pa1.narvii.com/6108/fd438b7ac4062319aa78e9ddf8e9220eb8ac1a2a_hq.gif"]
              
           
if(!member) return message.channel.send('<:incorrecto:558845297447403558> | Menciona a un usuario.').then(m => m.delete(3000))
if(message.author.id === member.id) return message.channel.send("Menciona a otro usuario.").then(m => m.delete(3000))
if(member.user.bot === true) return message.channel.send("<:red_tick:642577040872308766> Menciona a otro usuario.")
  
var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' mordió a  '+ member.user.username +' owo **')
  .setImage(bite[Math.floor(Math.random() * bite.length)])
        message.channel.send({embed});
}
module.exports.help = {
  name: "bite",
  aliases: []
}