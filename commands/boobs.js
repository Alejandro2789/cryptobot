const Discord = require("discord.js");
const randomPuppy = require('random-puppy')

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "401083681923661825") return;
   if (!message.channel.nsfw) return message.reply(":underage: | Solo en canales nsfw.");

    var subreddits = [
        'boobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })

}
module.exports.help = {
  name: "boobs",
  aliases: []
}