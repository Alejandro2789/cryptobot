const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const dgestor = require('discord-gestor');
module.exports.run = async (bot, message, args) => {

  
let regalo = message.mentions.members.first() || message.guild.members.get(args[0]);

dgestor.utilidad.agregarCooldown('daily', message.author.id, {horas: 7}, (resp, tiempo) =>{
    if (resp) {
      
if(!regalo){
  if(!creditos_profile.tiene(message.author.id)) {
  creditos_profile.establecer(message.author.id, 250);
    message.channel.send(":moneybag: | **$250** créditos recogidos.\n:stopwatch: | Vuelve en **7h**!");
}


  else{
    creditos_profile.sumar(message.author.id, 250)
   message.channel.send(":moneybag: | **$250** créditos recogidos.\n:stopwatch: | Vuelve en **7h**!");
  }
}
      else{
        
     
if(!creditos_profile.tiene(regalo.id)) {
  creditos_profile.establecer(regalo.id, 250);
  message.channel.send(`:moneybag: | ${message.author.username} le ha dado a ${regalo.user.username} sus **$250** créditos diarios.\n:stopwatch: | Vuelve en **7h**!`);
}


  else{
    creditos_profile.sumar(regalo.id, 250)
      message.channel.send(`:moneybag: | ${message.author.username} le ha dado a ${regalo.user.username} sus **$250** créditos diarios.\n:stopwatch: | Vuelve en **7h**!`);
  }
      } 
 
    } else {
        
        message.channel.send(`:stopwatch: | __Cooldown__, ${message.author.username} espera: **` + tiempo.horas + ' horas, ' + tiempo.minutos + ' minutos, ' + tiempo.segundos + ' segundos.**');
        
    }
  
})


}
module.exports.help = {
  name: "daily",
  aliases: []
}
