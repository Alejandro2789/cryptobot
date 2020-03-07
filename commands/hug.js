const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
 let user = message.mentions.users.first();  
    let hug = ["https://media1.tenor.com/images/10580f88f4437c8a33091b5a6933c618/tenor.gif?itemid=5740496",
                  "https://thumbs.gfycat.com/UnlinedChiefAnemoneshrimp-small.gif",
                  "https://pa1.narvii.com/6384/5a6a03bc9623f98a86669b8854a38e0f78ea954e_hq.gif",
                  "https://66.media.tumblr.com/14829d70565e3ccc2f54767661b72d04/tumblr_mzryfeD8uk1snpt0eo1_500.gif"]
                  
if(!user) return message.channel.send('Menciona a un usuario.');
    if(message.author.id === user.id) return message.channel.send("Menciona a otro usuario.").then(m => m.delete(3000));
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' a abrazado a '+ user.username +'** owo')
  .setImage(hug[Math.floor(Math.random() * hug.length)])
        message.channel.send({embed});
}
module.exports.help = {
  name: "hug",
  aliases: []
}