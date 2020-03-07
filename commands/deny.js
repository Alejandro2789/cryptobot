const Discord = require("discord.js");
const db = require("megadb");
const suge = new db.crearDB("canal_sugerencias");
const sugerencias = new db.crearDB("sugerencias_formato");
const emoji = require("../emojis.json");
exports.run = async(client, message, args, prefix, command) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`); 
  
let c = suge.tiene(message.guild.id) ? await suge.obtener(message.guild.id) : message.channel.id;
let canal = message.guild.channels.get(c);
if(!suge.tiene(message.guild.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** aún no hay canal de sugerencias establecido.`);
if(!sugerencias.tiene(message.guild.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** no hay sugerencias pendientes.`);
 

let codigo = args[0];
if(!codigo) return message.channel.send(emoji.incorrecto + `**${message.author.username},** ingrese el código de la suugerencia a responder.`);
let respuesta = args.slice(1).join(" ");
if(!respuesta) return message.channel.send(emoji.incorrecto + `**${message.author.username},** ingrese la respuesta de la sugerencia!`);
  
  
sugerencias.find(message.guild.id, tipo => tipo.ID == codigo).then(suggest => {
 
  

if(suggest == undefined) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** no existe ninguna sugerencia con ese código!`);
  
  
let autor = suggest.autor;
let sugerencia = suggest.sugerencia;
let id = suggest.ID;
  
const s = new Discord.RichEmbed()
.setTitle("🚫 ╏ Sugerencia Denegada")
.setDescription(`${sugerencia}`)
.addField(`**• Sugerente:**`,message.author.tag)
.addField(`**• Respuesta:**`, respuesta)
.addField(`**• ID Sugerencia:**`, codigo)
.setFooter(message.guild.name, message.guild.iconURL)
.setColor("RED")
  
canal.send(s);
  
message.channel.send(emoji.correcto + ` **${message.author.username},** la sugerencia fue denegada correctamente.`);
  
sugerencias.obtener(message.guild.id).then(usuarios => {
  let index = usuarios.findIndex(u => u.ID == codigo)
  if(index != -1) {
    sugerencias.delIndex(message.guild.id, index).then(nuevo_array => {
    }).catch(error => console.log(error))
  }})
  
})
  
  
};
exports.help = {
  name: 'deny',
  aliases: [""]
};