const Discord = require("discord.js");
const db = require("megadb");
let creditos = new db.crearDB('cantidad_creditos');
const boost = new db.crearDB("boost_juegos");
const dgestor = require('discord-gestor');
const pico = new db.crearDB("picos");
const emoji = require("../emojis.json")
module.exports.run = async(bot, message, args) => {
  
  
//if(!pico.tiene(message.author.id)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** no puedes minar, debido a que no tienes picos en tú inventario!`);
//pico.restar(message.author.id, 1);
  
dgestor.utilidad.agregarCooldown('mine', message.author.id, {minutos: 5}, async(resp, tiempo) =>{

    if (resp) {
      
let cantidad_boosters = boost.tiene(message.author.id) ? await boost.obtener(`${message.author.id}.tiros`) : "0";
  
let minado = Math.floor(Math.random() * (100 - 5)) + 5;
const booster_total = Math.floor(Math.random() * Math.floor(800));
  
  
  
if(cantidad_boosters <= 0){
if(!creditos.tiene(message.author.id)){
    message.channel.send("Has conseguido un mineral valorado en "+"**" + minado+"**!")
  creditos.establecer(message.author.id, minado)
}else{
   creditos.sumar(message.author.id, minado)
   message.channel.send("Has conseguido un mineral valorado en "+"**" + minado+"**!")
}
}else{

    if(boost.tiene(message.author.id)){
if(!creditos.tiene(message.author.id)){
  
  let total = (minado+booster_total);
  
  creditos.establecer(message.author.id, total)

  
  message.channel.send(`<:boost:632677966802976895> **¡boost!** Has conseguido minar **${total}**!`)
  
  boost.restar(`${message.author.id}.tiros`, 1)
  
}else{
   let total = (minado+booster_total);
  
  creditos.sumar(message.author.id, total)
  
  message.channel.send(`<:boost:632677966802976895> **¡boost!** Has conseguido minar **${total}**!`)
  
  boost.restar(`${message.author.id}.tiros`, 1)
}}}
  
      } else {
        
        message.channel.send(`:stopwatch: | __Cooldown__, ${message.author.username} espera: **` + tiempo.minutos + ' minutos,'  + tiempo.segundos + ' segundos.**')
        
    }
})
  
  
  
  
  
  
  

  
 


  
}
module.exports.help = {
  name: "mine",
  aliases: ["minar","mine","m"]
}
