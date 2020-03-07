const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const dgestor = require('discord-gestor');

module.exports.run = async (bot, message, args) => {

   dgestor.utilidad.agregarCooldown('fish', message.author.id, {minutos: 4}, (resp, tiempo) =>{
     if (resp) {
     
    let minado = Math.floor(Math.random() * (50 - 5)) + 5;
       
         message.channel.send(":fishing_pole_and_fish: | Pescando..")
    .then(m => {
      setTimeout(function() {
       
      m.edit(':fishing_pole_and_fish: | Pescando...') .then(m => {
      
      setTimeout(function() {
      
      m.edit(`**:fishing_pole_and_fish: | Felicidades has pescado un :squid:.\n:dollar: | Precio: \$${minado} créditos!\nPagaste: $10.**`)
        
      }, 1000)});
   }, 1000)});
 

if(!creditos_profile.tiene(message.author.id)) return message.channel.send("Los créditos no te alcanzan.").then(m => m.delete(3000));
  
  creditos_profile.restar(message.author.id, 10)
  creditos_profile.sumar(message.author.id, minado)
  
 
    }else {
         
      message.channel.send(`:stopwatch: | __Cooldown__, ${message.author.username} espera: **` + tiempo.horas + ' horas, ' + tiempo.minutos + ' minutos, ' + tiempo.segundos + ' segundos.**')
    }
   })
   
}
module.exports.help = {
  name: "fish",
  aliases: ["f"]
}