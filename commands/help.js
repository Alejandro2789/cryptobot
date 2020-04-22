const Discord = require("discord.js");
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");
module.exports.run = async(bot, message, args) => {
  
  const developer = bot.users.get("401083681923661825").tag;
  
  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
       prefix = "c!"
       }
  
  const helpEmbed = new Discord.RichEmbed()
  .setColor("#1bf290")
  .setTitle(":flags: | Menú de ayuda.")
  .setDescription("Si necesitas ayuda, **únete** al servidor de *[soporte](https://discord.gg/UKCc3F)* para brindarte la ayuda **necesaria.**\nSoy un bot con múltiples comandos para tú servidor, tanto **:balloon: diversión** cómo **:tools: moderación.**")
  .addField("• Información:", `> Mi desarrollador es \`${developer}\`, puedes ver mi lista completa de comandos usando **${prefix}comandos.**\n> Si has encontrado un error favor reportarlo con el comando **${prefix}error**.`)
  .addField("• Enlaces:", "> <a:invitacion:702558837122793575> [Invitación](https://discordapp.com/oauth2/authorize?client_id=495758665391800321&scope=bot&permissions=66583880)\n> <:DBL:702558108555411466> [Discord Bot List](https://discordbots.org/bot/495758665391800321)")
  .addField("• Estadísticas:", `> \`-\` Servidores: **${bot.guilds.size}**\n> \`-\` Usuarios: **${bot.users.size}**\n> \`-\` Canales: **${bot.channels.size}**\n> \`-\` Conexión: **${Math.floor(bot.ping)}ms.**`)
  message.channel.send(helpEmbed)
}
module.exports.help = {
  name:"help",
  aliases:["ayuda"]
}