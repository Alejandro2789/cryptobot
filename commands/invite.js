const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
     .addField("<:pandaderp:558845099220402186> Link directo. <3", "[🔗Click Aquí.](https://discordapp.com/oauth2/authorize?client_id=495758665391800321&scope=bot&permissions=66583880)")
     .setColor("#15f153")
    
    message.channel.send({embed});

}
module.exports.help = {
  name: "invite",
  aliases: []
}