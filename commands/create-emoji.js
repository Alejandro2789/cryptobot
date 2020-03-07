const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

   
if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

  var guild = message.guild;
const link = args.join(" ").split(" | ")
if(!link[0]) return message.channel.send("<:incorrecto:558845297447403558> | Debes de ingresar el link y el nombre del emoji a crear, separados por `|`.")
  
guild.createEmoji(link[0], link[1])
  .then(emoji => {
  message.channel.send('Creando emoji..')
  .then((msg) => {
    setTimeout(function() {
    msg.edit(`**<:correcto:558845268800307229> | Emoji creado correctamente.**\n_Nombre:_ \`${emoji.name}\``);
  }, 2000)});  
})

  .catch(error => message.channel.send(`:warning: **Un error a ocurrido:** \`\`\`js\n${error}\`\`\``))

  
}
module.exports.help = {
  name: "create-emoji",
  aliases: []
}