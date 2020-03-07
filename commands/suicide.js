const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
  let suicide = ["https://pa1.narvii.com/6575/674d9c16e8b695974b9fe57db45e77588a5e4a6f_hq.gif",
                  "https://d.wattpad.com/story_parts/496568469/images/14f8432d24b52493578773799543.gif",
                  "https://pa1.narvii.com/6335/e99a65c2e0ec95478f1d99a8f6c5b6d42ca2c595_hq.gif"]
              
    var embed = new Discord.RichEmbed()
  .setColor(3447003)
  .setDescription(message.author.username +' se suicido D":')
  .setImage(suicide[Math.floor(Math.random() * suicide.length)])
        message.channel.send({embed});
}
module.exports.help = {
  name: "suicide",
  aliases: []
}