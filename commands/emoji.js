const Discord = require("discord.js");
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {
  
  let emoji_name = args[0];
  if(!emoji_name) return message.channel.send("<:red_tick:642577040872308766> Ingrese el nombre del emoji.");
  
  const find_emoji = message.guild.emojis.find(x => x.name === emoji_name);
  if(!find_emoji) return message.channel.send(`${emoji.incorrecto} No he podido encontrar la información del emoji.`)
  
  const animado = find_emoji.animated ? `${emoji.nitro} Si es animado.` :  `${emoji.incorrecto} No es animado.`
  
  const embed = new Discord.RichEmbed()
  .setTitle("• Información del emoji: "+ find_emoji)
  .addField("» Nombre:", emoji_name)
  .addField("» ID:", find_emoji.id)
  .addField("» Link:", find_emoji.url)
  .addField("» ¿Animado?:", animado)
  .addField("» Creado:", find_emoji.createdAt.toDateString())
  .setThumbnail(find_emoji.url)
  .setColor("RANDOM")
  .setFooter(`• Solicitado por: ${message.author.username}.`)
  
  message.channel.send(embed);
}
module.exports.help = {
  name:"emoji"
}