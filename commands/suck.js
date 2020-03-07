const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

     let user = message.mentions.users.first();  
    let suck = ["https://images.sex.com/images/pinporn/2014/08/06/300/7314214.gif",
                  "http://68.media.tumblr.com/32afe947b5538c832f0fa2838b6a85bf/tumblr_nphyd7qoxN1rke3fuo1_400.gif",
                  "http://img.erogif-ch.com/ta9jMnee5T/5.gif"]
              
            if(!message.channel.nsfw) return message.channel.send("**Debes estar en un canal __nsfw__ para hacer eso!**")
if(!user) return message.channel.send('Menciona a un usuario!.');
    if(message.author.id === user.id) return message.channel.send("Menciona a otro usuario.");
  
    var embed = new Discord.RichEmbed()
  //.setAuthor(message.author.username, message.author.avatarURL)
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' le lame el miembro a '+ user.username +'**')

  .setImage(suck[Math.floor(Math.random() * suck.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "suck",
  aliases: []
}