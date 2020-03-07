const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

  
let guild = message.guild;
  
let canal = args.join(" ").split(" | ")

if(canal[0] === "text"){

if(!canal[1]) return message.channel.send("<:incorrecto:558845297447403558> | Escribe el nombre del canal.").then(m => m.delete(4000))
  
guild.createChannel(canal[1], 'text')

  

const embed = new Discord.RichEmbed()
.setTitle("<:correcto:558845268800307229> | __Canal Creado.__")
.setColor("#0000ff")
.setDescription(`**Nombre:** \`${canal[1]}\`\n**Tipo:** \`Texto\``)

message.channel.send(embed)



} else if(canal[0] === "voice") {
if(!canal[1]) return message.channel.send("<:incorrecto:558845297447403558> | Escribe el nombre del canal.").then(m => m.delete(4000))
  
guild.createChannel(canal[1], 'voice')
//todo la funcion del code para crear el canal de voz con el nombre

  
const embed = new Discord.RichEmbed()
.setTitle("<:correcto:558845268800307229> | __Canal Creado.__")
.setColor("#0000ff")
.setDescription(`**Nombre:** \`${canal[1]}\`\n**Tipo:** \`Voz\``)

message.channel.send(embed)
} else {
message.channel.send("Solo canales de voz o texto.\n> Voz = voice\n> Texto = text")
}
}
module.exports.help = {
  name: "create-channel",
  aliases: ["crearcanal"]
}