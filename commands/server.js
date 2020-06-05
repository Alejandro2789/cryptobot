const Discord = require("discord.js");
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {
  
  let servidor = message.guild;
  
  const emojisnormales = message.guild.emojis.filter(e => e.animated === false).size;
  const emojisNitro = message.guild.emojis.filter(e => e.animated === true).size;
  const afkCanal = servidor.afkChannel ? servidor.afkChannel : `${emoji.incorrecto} El servidor **no** tiene canal de afk.`;
   let texto = message.guild.channels.filter(x => x.type === "text").size;
   let voz = message.guild.channels.filter(x => x.type === "voice").size;
   let categoria = message.guild.channels.filter(x => x.type === "category").size;
  
    var verificaciones = {
          0: "Ninguno",
          1: "Bajo",
          2: "Medio",
          3: "`(╯°□°）╯︵ ┻━┻`",
          4: "`┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻`"
        }
  
  
  const embed = new Discord.RichEmbed()
  .setTitle(`${emoji.correcto} Información sobre ${message.guild.name}.`)
  .addField("• Owner:", `${servidor.owner} \`-\` ${servidor.owner.id} \`-\` #${servidor.owner.user.discriminator} `)
  .addField("• Servidor:", `» Nombre: ${servidor.name}   » Creado: \`${servidor.createdAt.toDateString()}\`\n» Seguridad: ${verificaciones[servidor.verificationLevel]}   » Miembros: ${servidor.memberCount} || **Humanos:** ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size} **Bots:** ${message.guild.members.filter(m => m.user.bot).size}`)
  .addField("• Emojis:", `» Normales: \`${emojisnormales}\`   » Nitro: \`${emojisNitro}\` `)
  .addField("• Canal AFK:", `${afkCanal}`)
  .addField("• Canales:", `» Texto: \`${texto}\`    » Voz: \`${voz}\`     » Categoría: \`${categoria}\` `)
  .setColor("#0000FF")
  .setFooter(`- Solicitado por ${message.author.username}.`, message.author.avatarURL)
  
  message.channel.send(embed)
}
module.exports.help = {
  name:"serverinfo"
}