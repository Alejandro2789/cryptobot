const Discord = require("discord.js");
const db = require("megadb");
const canal_mod = new db.crearDB("canales_mods");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
  
let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
let canal = message.guild.channels.get(c);
if(!canal) canal = message.channel.id;
  
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
let id = args[0]
if(!id) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Ingresa la ID del usuario a desbanear.`);


if(isNaN(id)) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** Una ID sólo contiene números.`);

if(message.guild.members.get(id)) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** Esa ID le pertenece a uno de los usuarios de este servidor.`)

bot.fetchUser(id).then(async (usuario) => { 
   let banusers = await message.guild.fetchBans();
   if(!banusers.has(usuario.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Este usuario actualmente no se encuentra baneado en este servidor.`);
 
   message.guild.unban(usuario.id).then(  () => {
     canal.send(`${emoji.correcto} Usuario desbaneado: **${usuario.username}#${usuario.discriminator}**`);
     message.channel.send(`${emoji.correcto} Usuario desbaneado: **${usuario.username}#${usuario.discriminator}**`)
    }).catch(error => {
       message.channel.send(emoji.error + "Ha ocurrido un error: "+error.message)
   })
}).catch(error => {
   message.channel.send(emoji.error + ` **${message.author.username}** El usuario con esa ID no existe.`)
})
}
module.exports.help = {
  name: "unban",
  aliases: []
}