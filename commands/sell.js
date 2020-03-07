const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');


const anilloo = new db.crearDB("anillos");
const picoo = new db.crearDB("picos");
const cañaa = new db.crearDB("cañas");
const galetaa = new db.crearDB("galletas");
const radioo = new db.crearDB("radios");
module.exports.run = async (bot, message, args) => {

if(!args[0]) return message.channel.send("Ingrese el nombre del ítem a comprar.")

if(args[0] === "anillo"){
let cantidad = parseInt(args[1])
if(!cantidad) cantidad = 1;
let tienetodas = await anilloo.obtener(message.author.id)
if(tienetodas < cantidad) return message.channel.send(`**Sólo tienes ${tienetodas} anillos!**`).then(m => m.delete(4000));
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad de items a vender, no símbolos ni letras.").then(m => m.delete(3000))
let total = (cantidad * 400)

anilloo.restar(message.author.id, cantidad);

if(!creditos_profile.tiene(message.author.id)){
  creditos_profile.establecer(message.author.id , total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** anillo por \$${total} créditos.**`)
}
  
else{
creditos_profile.sumar(message.author.id, total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** anillo por \$${total} créditos.**`)
   }

  





} else if(args[0] === "caña") {
  let cantidad = parseInt(args[1])
  if(!cantidad) cantidad = 1;
let tienetodas = await cañaa.obtener(message.author.id)
if(tienetodas < cantidad) return message.channel.send(`**Sólo tienes ${tienetodas} cañas de pescar!**`).then(m => m.delete(4000));
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad de items a vender, no símbolos ni letras.").then(m => m.delete(3000))
let total = (cantidad * 50)

cañaa.restar(message.author.id, cantidad);

if(!creditos_profile.tiene(message.author.id)){
  creditos_profile.establecer(message.author.id , total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** caña's de pescar por \$${total} créditos.**`)
}
  
else{
creditos_profile.sumar(message.author.id, total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** caña's de pescar por \$${total} créditos.**`)
   }

  

  
  
} else if(args[0] === "pico") {
let cantidad = parseInt(args[1])
if(!cantidad) cantidad = 1;
let tienetodas = await picoo.obtener(message.author.id)
if(tienetodas < cantidad) return message.channel.send(`**Sólo tienes ${tienetodas} picos!**`).then(m => m.delete(4000));
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad de items a vender, no símbolos ni letras.").then(m => m.delete(3000))
let total = (cantidad * 150)

picoo.restar(message.author.id, cantidad);

if(!creditos_profile.tiene(message.author.id)){
  creditos_profile.establecer(message.author.id , total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** pico's por \$${total} créditos.**`)
}
  
else{
creditos_profile.sumar(message.author.id, total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** pico's por \$${total} créditos.**`)
   }

  
  } else if(args[0] === "galleta") {
let cantidad = parseInt(args[1])
if(!cantidad) cantidad = 1;
let tienetodas = await galetaa.obtener(message.author.id)
if(tienetodas < cantidad) return message.channel.send(`**Sólo tienes ${tienetodas} galletas!**`).then(m => m.delete(4000));
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad de items a vender, no símbolos ni letras.").then(m => m.delete(3000))
let total = (cantidad * 25)

galetaa.restar(message.author.id, cantidad);

if(!creditos_profile.tiene(message.author.id)){
  creditos_profile.establecer(message.author.id , total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** galleta's por \$${total} créditos.**`)
}
  
else{
creditos_profile.sumar(message.author.id, total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** galleta's por \$${total} créditos.**`)
   }

    
     } else if(args[0] === "radio") {
let cantidad = parseInt(args[1])
if(!cantidad) cantidad = 1;
let tienetodas = await radioo.obtener(message.author.id)
if(tienetodas < cantidad) return message.channel.send(`**Sólo tienes ${tienetodas} radios!**`).then(m => m.delete(4000));
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad de items a vender, no símbolos ni letras.").then(m => m.delete(3000))
let total = (cantidad * 500)

radioo.restar(message.author.id, cantidad);

if(!creditos_profile.tiene(message.author.id)){
  creditos_profile.establecer(message.author.id , total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** radio's por \$${total} créditos.**`)
}
  
else{
creditos_profile.sumar(message.author.id, total)
  message.channel.send(`**:moneybag: Has vendido** \`${cantidad}\`** radio's por \$${total} créditos.**`)
   }
       
      

  } else {
message.channel.send(`El ítem **${args[0]}** es inválido.`)//.then(m => m.delete(4000));
}


  

}
module.exports.help = {
  name: "sell",
  aliases: ["vender"]
}
