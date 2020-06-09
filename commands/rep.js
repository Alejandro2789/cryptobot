const Discord = require("discord.js");
const db = require('megadb');
let reps_profile = new db.crearDB('reputaciones');
const dgestor = require('discord-gestor');

module.exports.run = async (bot, message, args) => {
  
const usuario = message.mentions.members.first() || message.guild.members.get(args[0])
if(!usuario) return message.channel.send(":anger: | Necesitas mencionar a un usuario.").then(m => m.delete(5000))
if (usuario.user.bot) return message.channel.send('No puedes darle rep a un bot.').then(m => m.delete(3000));
if(message.author.id === usuario.id) return message.channel.send(":anger: | No puedes darte reputación a tí mismo.").then(m => m.delete(3000))
const bloqueo = ["419706806785409024" , "509208593074094090" , "541153275081129995" , "590398344820686855" , "523088150826975233" , "307664592362930191"];
if(bloqueo.includes(usuario.id)) return;
  
dgestor.utilidad.agregarCooldown('reputación' , message.author.id , {horas: 7}, (resp, tiempo) =>{
    if (resp) {


      

if(!reps_profile.tiene(usuario.id)) {
  reps_profile.establecer(usuario.id, 1);
}


  else{
    reps_profile.sumar(usuario.id, 1)
  }

  message.channel.send(`**:game_die: | ${message.author.username} le ha otorgado un punto de reputación a ${usuario.user.username}**`)
 
    } else {
        
        message.channel.send(':stopwatch: | __Cooldown__, espera: **' + tiempo.horas + ' horas, ' + tiempo.minutos + ' minutos, ' + tiempo.segundos + ' segundos.**');
        
    }
})

let reps_usuario = reps_profile.tiene(usuario.id) ? await reps_profile.obtener(usuario.id) : "0";
let reps_autor = reps_profile.tiene(message.author.id) ? await reps_profile.obtener(message.author.id) : "0";
  
let canal = bot.channels.get("597516842072014858");
canal.send(`**${message.author.tag}** el ha otorgado un punto de reputación a **${usuario.user.tag}**\n\n﹥Reps de ${usuario.user.tag}: **${reps_usuario}.**\n﹥Reps de ${message.author.tag}: **${reps_autor}.**\n\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
  
}
module.exports.help = {
  name: "rep",
  aliases: []
}


