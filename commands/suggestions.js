const Discord = require("discord.js");
const db = require("megadb");
const suge = new db.crearDB("canal_sugerencias");
const emoji = require("../emojis.json");
const prefix_db = new db.crearDB("prefixes");
module.exports.run = async (bot, message, args) => {
  
let estado;
if(suge.tiene(message.guild.id)){
  estado=`${emoji.encendido} Activas`
}else{
  estado=`${emoji.apagado} No activas`
};
  
let prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "c!";
  
let canal = message.mentions.channels.first() || bot.channels.get(args[0]);
  
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
let errorEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${emoji.incorrecto} Error!`)
.setDescription(`Debes de mencionar un canal de texto.`)
.addField("• Status:", estado)
.addField("• Uso correcto:", `${prefix}suggestions <off/#canal/canal_id>`)
.addField("• Ejemplo:", "c!suggestions #sugerencias || c!suggestions 655590570353229824")
.setFooter(message.author.username, message.author.avatarURL)
  
if(canal){

if(canal.type !== "text") return message.channel.send(errorEmbed); 

const succesEmbedSet = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Sugerencias activadas!`)
.setDescription(`**${message.author.username}**, el canal de las sugerencias será: ${canal}!`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbedSet);
  
suge.establecer(message.guild.id,  canal.id);
  
  
}else if(args[0] === "off"){

  
if(!suge.tiene(message.guild.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el servidor no cuenta con sugerencias activas.`);
  
suge.eliminar(message.guild.id);
  
const succesEmbed = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Sugerencias desactivadas!`)
.setDescription(`Las sugerencias del servidor **${message.guild.name}** han sido desactivadas correctamente.`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbed);

}else{
  if(!canal) return message.channel.send(errorEmbed);
}

}
module.exports.help = {
  name: "suggestions",
  aliases: []
}
