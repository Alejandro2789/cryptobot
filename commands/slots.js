const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');

module.exports.run = async (bot, message, args) => {

   if(message.author.id !== "401083681923661825") return message.channel.send("Comando deshabilitado temporalmente.");
    let slots = ["🍊", "🍌", "🍓", "🍈"];
    let slots2 = ["🍌", "🍊", "🍓", "🍈"];
    let slots3 = ["🍌", "🍊", "🍈", "🍓"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
  
    let re1 = Math.floor((Math.random() * slots2.length));
    let re2 = Math.floor((Math.random() * slots2.length));
    let re3 = Math.floor((Math.random() * slots2.length));
  
    let res1 = Math.floor((Math.random() * slots2.length));
    let res2 = Math.floor((Math.random() * slots2.length));
    let res3 = Math.floor((Math.random() * slots2.length));
    if(!creditos_profile.tiene(message.author.id)) return message.channel.send("No tienes créditos para utilizar este comando!")
    let cantidad = parseInt(args[0]);
    if(!cantidad) return message.channel.send("Ingrese la cantidad.")
    let creditos = await creditos_profile.obtener(message.author.id)
    if(creditos < cantidad) return message.channel.send(`Créditos insuficientes.`).then(m => m.delete(4000));
    if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar números, no símbolos ni letras.").then(m => m.delete(3000))
    let premio = (cantidad * 2);
  
if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) {
message.channel.send(`『🎰』**Slots**\n\n${slots2[re1]} - ${slots2[re2]} - ${slots2[re3]}\n\n${slots[result1]} - ${slots[result2]} - ${slots[result3]} **<**\n\n${slots3[res1]} - ${slots3[res2]} - ${slots3[res3]}\n\n• ¡Ganaste!\n\n▸ ${message.author.username} has ganado **$${premio}.**`)
if(!creditos_profile.tiene(message.author.id)){
creditos_profile.establecer(message.author.id, premio)
}
else{
creditos_profile.sumar(message.author.id, premio)
}
} else {

message.channel.send(`『🎰』**Slots**\n\n${slots2[re1]} - ${slots2[re2]} - ${slots2[re3]}\n\n${slots[result1]} - ${slots[result2]} - ${slots[result3]} **<**\n\n${slots3[res1]} - ${slots3[res2]} - ${slots3[res3]}\n\n• ¡Perdiste!\n\n▸ ${message.author.username} has perdido **$${cantidad}.**`)
creditos_profile.restar(message.author.id, cantidad)
}
 
}
module.exports.help = {
  name: "slots",
  aliases: ["slot"]
}