const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let img = message.mentions.users.first()
  if (!img) {

      const embed = new Discord.MessageEmbed()
      .setDescription(`[🔗 | Descargar.](${message.author.avatarURL})`)
      .setImage(`${message.author.avatarURL}`)
      .setColor("RANDOM")
      .setFooter(`📷 | Avatar de ${message.author.username}#${message.author.discriminator}`);

      message.channel.send({ embed });

  } else if (img.avatarURL === null) {

      message.channel.send("El usuario ("+ img.username +") no tiene avatar!");

  } else {

      const embed = new Discord.MessageEmbed()
      .setDescription(`[🔗 | Descargar.](${img.avatarURL})`)
      .setImage(`${img.avatarURL}`)
      .setColor("RANDOM")
      .setFooter(`📷 | Avatar de ${img.username}#${img.discriminator}`);
      message.channel.send({ embed });

  };

}
module.exports.help = {
  name: "avatar",
  aliases: []
}