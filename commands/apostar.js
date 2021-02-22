const Discord = require("discord.js");
const db = require('megadb');
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");
const dgestor = require('discord-gestor');
module.exports.run = async (bot, message, args) => {
                        
let apuesta = parseInt(args[0])
let doble = apuesta*2;
let numero = parseInt(args[1])

let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < apuesta) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Tú balance actual es __menor__ a la cantidad a apostar.`);
  
if(!apuesta) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Debes de agregar la cantidad de créditos a apostar.`);
if(!numero) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Debes de ingresar el número al cuál le apuestas.`);

if(args.join(" ").includes("-"))  return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No puedes apostar cantidades negativas.`);
if(numero > 10) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Sólo puedes apostar hasta el número 10.`)
  
const random = Math.floor(Math.random() * Math.floor(10));
  
  
if(numero === random){
  
const embed = new Discord.MessageEmbed()
.setTitle(":slot_machine: Apuestas.")
.setDescription(`__Resultado:__ **${random}**\n\n+ **${doble}** créditos agregados a tu cuenta!`)
.setColor("#5668ec")
.setFooter(message.author.username, message.author.avatarURL)
  message.channel.send(embed)
 // message.channel.send(`:slot_machine: *Apuestas.*\n__Resultado:__ **${random}**\n+ ${apuesta} créditos agregados a tu cuenta!`)
  if(!creditos_profile.tiene(message.author.id)){
     creditos_profile.establecer(message.author.id, doble)
     }
  else{ 
    creditos_profile.sumar(message.author.id, doble)
  }
}
  
else{
  const embed = new Discord.MessageEmbed()
.setTitle(":slot_machine: Apuestas.")
.setDescription(`__Resultado:__ **${random}**\n\n- **${apuesta}** créditos eliminados de tu cuenta!`)
.setColor("#5668ec")
.setFooter(message.author.username, message.author.avatarURL)
  message.channel.send(embed)
  creditos_profile.restar(message.author.id, apuesta)


}
      


}
module.exports.help = {
  name: "apostar",
  aliases: ["bet"]
}
