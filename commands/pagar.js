const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {


let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione o escriba la ID del usuario a pagar.`);
if (usuario.user.bot) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No le puedes pagar a un bot.`);
if(usuario.id === message.author.id) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Mencione a otro usuario diferente a ti.`);

if(args.join(" ").includes("-"))  return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No puedes pagar cantidades negativas.`);
  
let cantidad = parseInt(args[1]);
  
if(!cantidad) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Coloca la cantidad de créditos a transferir.`)
  
let creditos = await creditos_profile.obtener(message.author.id);
if(creditos < cantidad) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No puedes pagar esa cantidad.`);
if(isNaN(cantidad)) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Necesitas colocar la cantidad de créditos a tranferir, no símbolos ni letras.`);

  
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
module.exports.help = {
  name: "transfer",
  aliases: ["pagar" , "give" , "pay" , "dar" , "transferir"]
}
