
const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
 

let [encuesta, pregunta1,emoji1, pregunta2, emoji2] = args.join(" ").split(" | ");
if(!encuesta) return message.channel.send(":white_check_mark: Uso Correcto: `<prefix>encuesta <pregunta> | <opción1> | <emoji_opción1> | <opción2> | <emoji_opción2>`\n**Recuerda:** Los emojis deben ser originales de Discord, no pueden ser emojis externos o no funcionará. También recuerda respetar los espacios.")
   
   
   message.delete(0);
   const embed = new Discord.RichEmbed()
   .setTitle("📊 | Encuesta.")
   .setColor(0xffff)
   .setDescription(`**${encuesta}**`)
   .addField(`Voto 1 - ${emoji1}`, `${pregunta1}`)
   .addField(`Voto 2 - ${emoji2}`, `${pregunta2}`)
   .setTimestamp()
   
   let msg = await message.channel.send(embed);
   
   await msg.react(emoji1);
   await msg.react(emoji2).catch(error => message.channel.send(`:warning: **Un error a ocurrido:** \`\`\`js\n${error}\`\`\``))
   
  
  
}
module.exports.help = {
  name: "encuesta",
  aliases: []
}