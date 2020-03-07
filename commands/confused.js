const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let confused = ["https://gifimage.net/wp-content/uploads/2017/09/anime-confused-gif-9.gif",
              "https://media1.tenor.com/images/e765e06eb21f7bdd41eb6605222c4f60/tenor.gif?itemid=6014356",
              "https://i.imgur.com/w8Thbu7.gif"]
                  
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription(message.author.username +' está confundido D:?')
  .setImage(confused[Math.floor(Math.random() * confused.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "confused",
  aliases: []
}