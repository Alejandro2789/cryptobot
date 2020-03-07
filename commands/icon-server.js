const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  var embed = new Discord.RichEmbed()
  .setColor("#2d572c")
  .setTitle(message.guild.name+'´s icon!')
  .setDescription("[Link Directo]("+message.guild.iconURL+")")
  .setImage(message.guild.iconURL)
  .setFooter("Pedido por: "+ message.author.username)
  message.channel.send({embed});

}
module.exports.help = {
  name: "icon_server",
  aliases: []
}