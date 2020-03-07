const Discord = require("discord.js");
const db = require("megadb");
const canal_mod = new db.crearDB("canales_mods");
const emoji = require("../emojis.json");
const prefix_db = new db.crearDB("prefixes");
module.exports.run = async (bot, message, args) => {
  
let estado;
if(canal_mod.tiene(message.guild.id)){
  estado="<:on:541811896156684319> Activo"
}else{
  estado="<:off:541811856252076042> No activo"
};
  
let prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "c!";
  
let canal = message.mentions.channels.first() || bot.channels.get(args[0]);
  
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
let errorEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${emoji.incorrecto} Error!`)
.setDescription(`Debes de mencionar un canal de texto.`)
.addField("• Status:", estado)
.addField("• Uso correcto:", `${prefix}mod-channel <off/#canal/canal_id>`)
.addField("• Ejemplo:", "c!mod-channel #mod-log || c!mod-channel 655590570353229824")
.setFooter(message.author.username, message.author.avatarURL)
  
if(canal){

if(canal.type !== "text") return message.channel.send(errorEmbed); 

const succesEmbedSet = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Canal de moderación activado!`)
.setDescription(`**${message.author.username}**, el canal de moderación será: ${canal}!`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbedSet);
  
canal_mod.establecer(message.guild.id,  canal.id);
  
  
}else if(args[0] === "off"){

  
if(!canal_mod.tiene(message.guild.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el servidor no cuenta con canal de moderación activo.`);
  
canal_mod.eliminar(message.guild.id);
  
const succesEmbed = new Discord.RichEmbed()
.setTitle(`${emoji.correcto} Canal de moderación desactivado!`)
.setDescription(`El canal de moderación del servidor **${message.guild.name}** han sido desactivados correctamente.`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send(succesEmbed);

}else{
  if(!canal) return message.channel.send(errorEmbed);
}

}
module.exports.help = {
  name: "mod-channel",
  aliases: []
}
