const Discord = require("discord.js");
const db = require("megadb");
const channel_logs = new db.crearDB("channel_logs");
const emoji = require("../emojis.json");
const prefix_db = new db.crearDB("prefixes");
module.exports.run = async (bot, message, args) => {
  
let estado;
if(channel_logs.tiene(message.guild.id)){
  estado=`${emoji.encendido} Activo`
}else{
  estado=`${emoji.apagado} No activo`
}
  
let prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "c!";
  
let canal = message.mentions.channels.first() || bot.channels.get(args[0]);
  
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

let errorEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${emoji.incorrecto} Error!`)
.setDescription(`Debes de mencionar un canal de texto.`)
.addField("• Status:", estado)
.addField("• Uso correcto:", `${prefix}logs <off/#canal/canal_id>`)
.addField("• Ejemplo:", "c!logs #registros || c!logs 655590570353229824")
.setFooter(message.author.username, message.author.avatarURL)
  

if(canal){

if(canal.type !== "text") return message.channel.send(errorEmbed); 

const succesEmbedSet = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Registros activados!`)
.setDescription(`**${message.author.username}**, el canal de registos será: ${canal}!`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbedSet);
  
channel_logs.establecer(message.guild.id,  canal.id);
  
  
}else if(args[0] === "off"){

  
if(!channel_logs.tiene(message.guild.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el servidor no cuenta con registros activos.`);
  
channel_logs.eliminar(message.guild.id);
  
const succesEmbed = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Registros desactivados!`)
.setDescription(`Los regitros del servidor **${message.guild.name}** han sido desactivados correctamente.`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbed);

}else{
  if(!canal) return message.channel.send(errorEmbed);
}

}
module.exports.help = {
  name: "logs",
  aliases: []
}