const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
let user = message.mentions.users.first();  
    let golpes = ["https://media.giphy.com/media/3ylkxB18Ihc3u/giphy.gif",
                  "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
                  "https://media.giphy.com/media/CUfY9iiyxyx56/giphy.gif",
                  "https://media.giphy.com/media/BKRECiW08vdjG/giphy.gif"]
                  
if(!user) return message.channel.send('Menciona a un usuario.');
if(message.author.id === user.id) return message.channel.send("¿Porqué te quieres golpear?").then(m => m.delete(3000));
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' ha golpeado a '+ user.username +'** :c')
  .setImage(golpes[Math.floor(Math.random() * golpes.length)])
        message.channel.send({embed});
}
module.exports.help = {
  name: "punch",
  aliases: []
}