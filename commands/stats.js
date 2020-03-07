const Discord = require("discord.js");
const moment = require("moment")
require('moment-duration-format')
module.exports.run = async (bot, message, args) => {

   const actividad = moment.duration(bot.uptime).format("D [dias], H [horas], m [minutos], s [segundos]");
   const developer = bot.users.get("401083681923661825").tag
   
    
  const embede = new Discord.RichEmbed()
  .setTitle("Estadísticas de Crypto.")
  .addField(":bulb:Información:", `\`\`\`• Creación: Domingo 30 de Septiembre del 2018\n• Desarrollador: ${developer}\n\`\`\``)
  .addField(":floppy_disk:Estadísticas:", `\`\`\`• Memoria Usada: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\n• Servidores: ${bot.guilds.size}\n• Usuarios: ${bot.users.size}\n• Canales: ${bot.channels.size}\`\`\``)
  .addField(":satellite_orbital:Conexión:", `\`\`\`• ${actividad}\`\`\``)
  //.addBlankField()
  //.addField("🆙 Mejoras:", "**-** Puedes cambiar el idioma del bot mediante el comando `lang`. El sistema está en beta por lo qué no todos los comandos están disponibles en Inglés.\n**-** You can change the bot language using the `lang` command. The system is in beta so not all commands are available in English.")
  .setColor(0x00AE86)
  message.channel.send(embede)
  
  
  
}
module.exports.help = {
  name: "stats",
  aliases: []
}