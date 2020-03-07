const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   message.channel.send("Eligiendo usuario..")
    .then(m => {
      setTimeout(function() {
      const embed = new Discord.RichEmbed()
      .setTitle(":game_die: | Azar") 
      .setDescription("**El elegido fue:** " + message.guild.members.random().user)
      m.edit(embed)
      }, 1000)});
  

}
module.exports.help = {
  name: "rmember",
  aliases: []
}