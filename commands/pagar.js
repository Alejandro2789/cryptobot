const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const idioma = new db.crearDB("lenguaje");
module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "401083681923661825") return message.channel.send("Comando deshabilitado temporalmente.");
  
  
  
let idioma_actual = idioma.tiene(message.author.id) ? await idioma.obtener(message.author.id) : `Español`;
  
if(idioma_actual === "ingles"){
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!usuario) return message.channel.send("Mention or type the user ID to pay.");
if (usuario.user.bot) return message.channel.send('You can\'t pay a bot.');
if(usuario.id === message.author.id) return message.channel.send("Mention another user.");

let cantidad = parseInt(args[1])
let creditos = await creditos_profile.obtener(message.author.id)
if(creditos < cantidad) return message.channel.send(`**Insufficient credits.**`);
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | You need to place the amount to be transferred, not symbols or letters.");

  
if(!creditos_profile.tiene(usuario.id)){
  creditos_profile.restar(message.author.id, cantidad)
  creditos_profile.establecer(usuario.id, cantidad)
  message.channel.send(":white_check_mark: Transaction completed.")
  usuario.send(`**:dollar: | Transfer receipt.**\n\`\`\`prolog\nYou have received $${cantidad} of ${message.author.username}\`\`\``)
}
  else{
     creditos_profile.restar(message.author.id, cantidad)
     creditos_profile.sumar(usuario.id, cantidad)
     message.channel.send(":white_check_mark: Transaction completed.")
  usuario.send(`**:dollar: | Transfer receipt.**\n\`\`\`prolog\nYou have received $${cantidad} of ${message.author.username}\`\`\``)
  }
  
  

}else if(!idioma.tiene(message.author.id)){

let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!usuario) return message.channel.send("Mencione o escriba la ID del usuario a pagar.")
if (usuario.user.bot) return message.channel.send('No le puedes pagar a un bot.')
if(usuario.id === message.author.id) return message.channel.send("Mencione a otro usuario.")


let cantidad = parseInt(args[1])
let creditos = await creditos_profile.obtener(message.author.id)
if(creditos < cantidad) return message.channel.send(`**Créditos insuficientes.**`)
if(isNaN(cantidad)) return message.channel.send("<:incorrecto:558845297447403558> | Necesitas colocar la cantidad a tranferir, no símbolos ni letras.")

  
if(!creditos_profile.tiene(usuario.id)){
  creditos_profile.restar(message.author.id, cantidad)
  creditos_profile.establecer(usuario.id, cantidad)
  message.channel.send(":white_check_mark: Transacción completada.")
  usuario.send(`**:dollar: | Recibo de transferencía.**\n\`\`\`prolog\nUsted ha recibido $${cantidad} de ${message.author.username}\`\`\``)
}
  else{
     creditos_profile.restar(message.author.id, cantidad)
     creditos_profile.sumar(usuario.id, cantidad)
     message.channel.send(":white_check_mark: Transacción completada.")
  usuario.send(`**:dollar: | Recibo de transferencía.**\n\`\`\`prolog\nUsted ha recibido $${cantidad} de ${message.author.username}\`\`\``)
  }
}
}
module.exports.help = {
  name: "transfer",
  aliases: ["pagar" , "give" , "pay" , "dar" , "transferir"]
}
