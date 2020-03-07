const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let dance = ["https://4.bp.blogspot.com/-oOx2OzeGMmI/Vx-yAFYhdzI/AAAAAAAAAJM/T54wnpSFyz80vYg8CxNd_2wNbtq05y73wCLcB/s1600/B9E.gif",
                  "https://data.whicdn.com/images/157362208/original.gif"];
                 
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription(message.author.username +' está bailando!!')
  .setImage(dance[Math.floor(Math.random() * dance.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "dance",
  aliases: []
}