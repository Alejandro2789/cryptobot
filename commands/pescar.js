const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const dgestor = require('discord-gestor');

module.exports.run = async (bot, message, args) => {

if(!creditos_profile.tiene(message.author.id)) return message.channel.send("**Los créditos no te alcanzan.**").then(m => m.delete(3000));
  
let pesca = [
  ":fish:",
  ":squid:",
  ":dolphin:",
  ":tropical_fish:",
  ":shark:"
  ];
   dgestor.utilidad.agregarCooldown('fish', message.author.id, {segundos: 20}, (resp, tiempo) =>{
     if (resp) {
     
    const minado = Math.floor(Math.random() * Math.floor(50));
       
         message.channel.send(":fishing_pole_and_fish: | Pescando..")
    .then(m => {
      setTimeout(function() {
       
      m.edit(':fishing_pole_and_fish: | Pescando...') .then(m => {
      setTimeout(function() {
      
      m.edit(':fishing_pole_and_fish: | Pescando....').then(m => {
      setTimeout(function() {
       
      m.edit(':fishing_pole_and_fish: | Pescando.....').then(m => {
      setTimeout(function() {
      
      m.edit(`**:fishing_pole_and_fish: | Felicidades has pescado un ${pesca[Math.floor(Math.random() * pesca.length)]}\n:dollar: | Precio: \$${minado} créditos!\nPagaste: $10.**`)
        
      }, 1000)});
   }, 1000)});
  }, 1000)});
}, 1000)});


  
  creditos_profile.restar(message.author.id, 10)
  creditos_profile.sumar(message.author.id, minado)
  
 
    }else {
         
      message.channel.send(':stopwatch: | __Cooldown__, espera: **' + tiempo.horas + ' horas, ' + tiempo.minutos + ' minutos, ' + tiempo.segundos + ' segundos.**').then(m => m.delete(1500));
    }
   })
   
}
module.exports.help = {
  name: "fish",
  aliases: ["f"]
}