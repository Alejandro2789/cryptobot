const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");

const anilloo = new db.crearDB("anillos");
const picoo = new db.crearDB("picos");
const cañaa = new db.crearDB("cañas");
const galetaa = new db.crearDB("galletas");
const radioo = new db.crearDB("radios");
const boost_juegos = new db.crearDB("boost_juegos");
const regalo = new db.crearDB("regalos");
module.exports.run = async (bot, message, args) => {


 
  
let canal = args.join(" ").split(" - ")
let cantidad = parseInt(canal[1])

if(canal[0] === "anillo"){
let cantidad = await creditos_profile.obtener(message.author.id)
if(cantidad < 1000) return message.channel.send("Créditos insuficientes.")

  
creditos_profile.restar(message.author.id, 1000)
message.channel.send(`:dollar: | Has comprado un anillo por $1000 créditos.`)
if(!anilloo.tiene(message.author.id)){
  anilloo.establecer(message.author.id, 1)
}
   else{
anilloo.sumar(message.author.id, 1)
   }
  





} else if(canal[0] === "caña") {
let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < 200) return message.channel.send("Créditos insuficientes.")
  
  
creditos_profile.restar(message.author.id, 200)
message.channel.send(":dollar: | Has comprado una caña de pescar por $200 créditos.")
if(!cañaa.tiene(message.author.id)){
  cañaa.establecer(message.author.id, 1)
}
   else{
cañaa.sumar(message.author.id, 1)
   }

  
  
} else if(canal[0] === "pico") {
  
  let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < 400) return message.channel.send("Créditos insuficientes.")
  
  
creditos_profile.restar(message.author.id, 400)
message.channel.send(":dollar: | Has comprado un pico por $400 créditos.")
if(!picoo.tiene(message.author.id)){
  picoo.establecer(message.author.id, 1)
}
   else{
picoo.sumar(message.author.id, 1)
   }
  
  } else if(canal[0] === "galleta") {
  
  let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < 100) return message.channel.send("Créditos insuficientes.")
  
  
creditos_profile.restar(message.author.id, 100)
message.channel.send(":dollar: | Has comprado una galleta por $100 créditos.")
if(!galetaa.tiene(message.author.id)){
  galetaa.establecer(message.author.id, 1)
}
   else{
galetaa.sumar(message.author.id, 1)
   }
    
    
 } else if(canal[0] === "radio") {
  
  let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < 900) return message.channel.send("Créditos insuficientes.")
  
  
creditos_profile.restar(message.author.id, 900)
message.channel.send(":dollar: | Has comprado un radio por $900 créditos.")
if(!radioo.tiene(message.author.id)){
  radioo.establecer(message.author.id, 1)
}
   else{
radioo.sumar(message.author.id, 1)
   }} else if(canal[0] === "booster_juegos") {
  
  let cantidad = await creditos_profile.obtener(message.author.id);
if(cantidad < 4600) return message.channel.send("Créditos insuficientes.")
  
  
creditos_profile.restar(message.author.id, 4600)
message.channel.send(":dollar: | Has comprado un booster de juegos por $4600 créditos. ¡Disfruta!")
if(!boost_juegos.tiene(message.author.id)){
  boost_juegos.establecer(message.author.id, {tiros: 5})
  
bot.channels.get("597516842072014858").send(`\`-\` El usuario **${message.author.tag}** ha comprado un boost de juegos!`)

}
   else{
boost_juegos.sumar(`${message.author.id}.tiros`, 5)
     
bot.channels.get("597516842072014858").send(`\`-\` El usuario **${message.author.tag}** ha comprado un boost de juegos!`)
   }
   
   
  
}else{
  message.channel.send("Ingrese el nombre el ítem a comprar.");
}

  
  
  

}
module.exports.help = {
  name: "buy",
  aliases: ["comprar"]
}
