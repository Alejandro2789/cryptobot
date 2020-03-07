const Discord = require("discord.js");
const db = require("megadb");
const canal_mod = new db.crearDB("canales_mods");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {
   message.delete();
  
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Menciona el usuario a kickear.`);
if(message.author.id == usuario.id) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No te puedes auto kickear.`);
  
if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

let razon = args.length > 1 ? args.slice(1).join(" ") : "Razón no proporcionada.";
    
if(!message.guild.member(usuario).kickable) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No puedo kickear al usuario.`);
message.guild.member(usuario).kick(razon);
message.channel.send(`${emoji.correcto} Usuario kickeado.\n\n- El usuario **${usuario.user.tag}** ha sido kickeado exitosamente del servidor!`);
  
let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
let canal = message.guild.channels.get(c)
  
const embed = new Discord.RichEmbed()
.setTitle("⚠️ Usuario Kickeado")
.setColor("#ff0000")
.addField("﹥Usuario:", `${usuario}, con la ID: **${usuario.id}**`)
.addField("﹥Kickeado por:", `**${message.member}**`)
.addField("﹥Razón:", `${razon}`)
.setFooter("Kickeo Exitoso")
.setTimestamp()
     
canal.send({embed});
    
}
module.exports.help = {
  name: "kick",
  aliases: []
}