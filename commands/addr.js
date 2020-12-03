const Discord = require("discord.js");
const db = require("megadb");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

  
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

const usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** mencione el usuario ha añadir el rol.`);
  
const rol = args.slice(1).join(" ");
let role = message.mentions.roles.first() || message.guild.roles.find(role => role.name === rol);
  
if(!role){
  return message.channel.send(emoji.incorrecto + ` **${message.author.username},** mencione el rol ha añadir.`)
}else if(!role.editable){
  return message.channel.send(emoji.incorrecto + ` **${message.author.username},** ese rol es más alto que el mío, por lo que no puedo entregarlo.`);
}else if(role.comparePositionTo(message.member.highestRole) > 0){
  return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Ese rol es más alto que tu rol así no puedes darselo a nadie.`)
}

  
  
usuario.addRole(role);
  
const embed = new Discord.MessageEmbed()
.setTitle("Rol añadido.")
.setColor("RANDOM")
.setDescription(`${emoji.correcto} | ${message.author.username} el rol ${role} ha sido añadido al usuario.`)
message.channel.send(embed);


}
module.exports.help = {
  name: "addrole",
   aliases: ["roleadd", "añadirrol"]
}