const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first();  
    let kill = ["https://66.media.tumblr.com/1117fc460d10d091b699815343a97268/tumblr_o1bfz7rrF11t15wswo1_500.gif",
                  "https://vignette.wikia.nocookie.net/akamegakill/images/8/85/Tonfa_Gun_anime.gif/revision/latest?cb=20160304235823&path-prefix=es",
                  "http://31.media.tumblr.com/958c8c2d9e9025319d7f0db428c699d2/tumblr_na85rdJJgK1rec90to1_500.gif"]
              
           
if(!user) return message.channel.send('Menciona a un usuario.');
     if(message.author.id === user.id) return message.channel.send("No te quieres asesinar a ti mismo.. menciona a otro usuario.");
    var embed = new Discord.RichEmbed()
  //.setAuthor(message.author.username, message.author.avatarURL)
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' asesinó a '+ user.username +'** :(')

  .setImage(kill[Math.floor(Math.random() * kill.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "kill",
  aliases: []
}