const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

  message.delete();
  
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  if(!args[0]) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Necesitas colocar el número de mensajes que quieres eliminar, debe ser menor a **100**.`);
  let number = args[0]
  if(isNaN(number)) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Necesitas colocar un número, no símbolos ni letras.`);
  number = parseInt(number)
  if(number >= 100 || number <= 0) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** El valor es inválido.`);
  message.channel.bulkDelete(number + 1 ).then( () => {
    message.channel.send(`<:eliminado:558845239683448833> | Se han eliminado **${number}** mensajes.`).then(m => m.delete(5000));
  }).catch(error => {
    message.channel.send(emoji.error + ` **${message.author.username}** Ocurrió un error: ${error.message}`)
  })
}
module.exports.help = {
  name: "clear",
  aliases: ["delete", "c", "eliminar"]
}