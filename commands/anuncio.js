const Discord = require("discord.js");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

message.delete();
  

if(!args.join(" ")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Formato incorrecto:\n \`<prefix>anuncio proyecto <cambio> | <cambio> | <cambio>..\`\n\n**-** Ejemplo: \`c!anuncio Naturaleza Mejor ambiente. | Aire más puro. | Sin contaminación.\` `)

  const newArgs = args.slice(1).join(" ").split(" | ");

const anuncioEmbed = new Discord.MessageEmbed()
.setTitle(args[0])
.setDescription(newArgs.map((x, i) => `${"•"} ${x}`).join("\n"))
.setColor("#B2FFFF")
.setFooter(message.author.username, message.author.avatarURL)
  
message.channel.send(anuncioEmbed);

}
module.exports.help = {
  name: "anuncio",
  aliases: []
}
