const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   let happy = ["https://thumbs.gfycat.com/DistantVillainousEasternnewt-size_restricted.gif",
                  "https://k34.kn3.net/taringa/2/0/9/1/2/0/83/alemftw/AC8.gif",
                  "http://www.lovethisgif.com/uploaded_images/40425-Comenta-Y-Logra-Hacer-A-Un-Panda-Feliz-Cancelar-Respuesta.gif"]
              
    var embed = new Discord.RichEmbed()
  //.setTitle("Golpes")
  //.setAuthor(message.author.username, message.author.avatarURL)
  .setColor(3447003)
  .setDescription(message.author.username +' está feliz! (・ω・)')
  //.setTimestamp()
  .setImage(happy[Math.floor(Math.random() * happy.length)])
        message.channel.send({embed});
 

}
module.exports.help = {
  name: "happy",
  aliases: []
}