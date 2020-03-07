const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

     let cry = ["http://k41.kn3.net/taringa/1/4/8/0/3/6/47/zilvereagle/2F9.gif?4973",
              "https://66.media.tumblr.com/15d515ced43348b30f3700f369615d02/tumblr_mosp2moTsG1qistd4o1_500.gif",
              "https://i.pinimg.com/originals/d1/3b/74/d13b74f42f231a0a3fd3a53ccdffeb71.gif"]
                  //https://vignette.wikia.nocookie.net/universosteven/images/4/4c/Steven_y_connie_baile.gif/revision/latest?cb=20151223235728&path-prefix=es
    var embed = new Discord.RichEmbed()
  //.setTitle("Golpes")
  //.setAuthor(message.author.username, message.author.avatarURL)
  .setColor(3447003)
  .setDescription(message.author.username +' está llorando D`:')
  //.setTimestamp()
  .setImage(cry[Math.floor(Math.random() * cry.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "cry",
  aliases: []
}