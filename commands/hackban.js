const Discord = require("discord.js");
const db = require("megadb");
const canal_mod = new db.crearDB("canales_mods");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
message.delete();
  
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
  
let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
let canal = message.guild.channels.get(c);
  
  
  
  
let mid = args.join(' ');
if(mid == bot.user.id) return message.channel.send(emoji.cool + ` A mi no me puedes banear.`)
if(!mid) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Ingrese la ID del  usuario a banear.`)
if(isNaN(mid)) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** Una ID sólo tiene números.`)
if(mid === message.author.id) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No te puedes autobanear.`);


   bot.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send(emoji.error + ` **${message.author.username}** Ha ocurrido un error al banear ha \`${id}\``)
        console.log(err)
      })
      message.channel.send(emoji.correcto + ` **${message.author.username}** El usuario **${id.tag}** ha sido baneado.`);
     canal.send(emoji.correcto + ` El usuario **${id.tag}** ha sido baneado.`);
    }).catch(() => {
      message.channel.send(emoji.incorrectoGif + ` La ID \`${mid}\` no le corresponde a ningún usuario.`)
    })

}
module.exports.help = {
  name: "hackban",
  aliases: []
}