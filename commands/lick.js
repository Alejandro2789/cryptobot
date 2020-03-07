const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first();  
    let lick = ["https://cdn.weeb.sh/images/Syg8gx0OP-.gif",
                  "https://cdn.weeb.sh/images/Sk15iVlOf.gif",
                  "https://i.imgur.com/yxBpFi3.gifv"]
              
           
if(!user) return message.channel.send('Menciona a alguien.');
   if(message.author.id === user.id) return message.channel.send("¿Porqué te quieres lamer a ti mismo?").then(m => m.delete(3000));
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' lamió a  '+ user.username +'** o///o')

  .setImage(lick[Math.floor(Math.random() * lick.length)])
        message.channel.send({embed});
  

}
module.exports.help = {
  name: "lick",
  aliases: []
}