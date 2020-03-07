const Discord = require("discord.js");
const emoji = require("../emojis.json");
let cooldown= new Set();
module.exports.run = async (bot, message, args) => {
  
let miembros = message.guild.memberCount;
let tiempo ;
  
if(miembros > 100) tiempo = "60000"
  else if(miembros < 100){
    tiempo= "10000";
  };

let mensaje;

if(miembros > 100) mensaje = ` **${message.author.username},** utilize el comando después de un minuto!`
  else if(miembros < 100){
    mensaje = ` **${message.author.username},** utilize el comando después de 10 segundos!`
  }
  
if(cooldown.has(message.author.id)){
   message.channel.send(mensaje);
   return;
}
cooldown.add(message.author.id);


setTimeout(() => {
  cooldown.delete(message.author.id);
}, tiempo);
  
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
  
if(!args[0]) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** ingrese el rol ha entregar.`);
let role = message.guild.roles.find(x => x.name === args.join(" ")) || message.mentions.roles.first() || message.guild.members.get(args[0]);
if(!role) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** El rol **${args.join(" ")}** no existe.`)
  
message.guild.members.forEach(x => x.addRole(role))
message.channel.send(`${emoji.correcto} **${message.author.username}** Entregando el rol **${role.name}** a **${message.guild.memberCount}** usuarios!`);
  
}
module.exports.help = {
  name: "roleall",
  aliases: ["role_to_all"]
}
