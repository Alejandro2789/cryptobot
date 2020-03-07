const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


const emojisnormales = message.guild.emojis.filter(e => e.animated === false).map(e => e).join("   **┄**   ");
const emojisNitro = message.guild.emojis.filter(e => e.animated === true).map(e => e).join("   **┄**   ");
 /*
const embed = new Discord.RichEmbed()
.setTitle("Lista de emojis.")
.addField("**Normales:**", emojisnormales)
.addField("**Nitro:**", emojisNitro)
.setFooter(message.guild.emojis.size + " emojis!")
message.channel.send(embed)*/
  message.channel.send(`Emojis de ${message.guild.name}.\nEmojis Normales: ${emojisnormales}\n\nEmojis Nitro: ${emojisNitro}`)
  
.catch(error => message.channel.send(`:warning: » **Un error a ocurrido:** \`\`\`js\n${error}\`\`\``))

}
module.exports.help = {
  name: "emojis",
  aliases: []
}

