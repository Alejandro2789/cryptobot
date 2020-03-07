const Discord = require("discord.js");
const db = require("megadb");
let advertencias = new db.crearDB("advertencias");
const emoji = require("../emojis.json");
exports.run = async(client, message, args, prefix, command) => {
  
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
let usuario = message.mentions.members.first();
let codigo = args[1];
  
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** mencione el usuario a eliminar la advertencia.`);
if(!codigo) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** ingrese la ID de la advertencia a eliminar.`);
  
if(!advertencias.tiene(`${message.guild.id}.${usuario.id}`)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el usuario no tiene advertencias.`)

let warns_user = await advertencias.obtener(`${message.guild.id}.${usuario.id}`);

if(warns_user.length <= 0) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el servidor no tiene advertencias.`);

advertencias.obtener(`${message.guild.id}.${usuario.id}`).then(usuarios => {
  let index = usuarios.findIndex(u => u.codigo == codigo)
  if(index != -1) {
    advertencias.delIndex(`${message.guild.id}.${usuario.id}`, index).then(nuevo_array => {
      
      message.channel.send(emoji.correcto + ` **${message.author.username},** la advertencia con la ID **${codigo}** se ha eliminado correctamente.`);
      
    }).catch(error => console.log(error))
  }
  else{
    message.channel.send(emoji.incorrecto + ` **${message.author.username},** no existe ninguna advertencia con la ID: **${codigo}!**`);
  }
}).catch(error => console.log(error))

  
};
exports.help = {
  name: 'unwarn',
  aliases: [""]
};