const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   let texto = message.guild.channels.filter(x => x.type === "text").size;
   let voz = message.guild.channels.filter(x => x.type === "voice").size;
   let categoria = message.guild.channels.filter(x => x.type === "category").size;
  
    let id = message.guild.id;
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField("• Canales:", "\`\`\`"+bot.guilds.get(id).channels.map(r => r.name).join(" | ")+"\`\`\`")
    .addBlankField()
    .addField("• Estadísticas:", `\`>\` **Canales de texto:** ${texto}\n\`>\` **Canales de voz:** ${voz}\n\`>\` **Categorías:** ${categoria}\n\`>\` **Total:** ${message.guild.channels.size}`)
    .setFooter(`• Lista de canales del servidor: ${message.guild.name}`);
    
message.channel.send({embed});

  
}
module.exports.help = {
  name: "canales",
  aliases: []
}