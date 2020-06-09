const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if(message.guild.id !== "702338467924803626") return;
  
  
  
if(args[0] === "sorteos"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719953581100236850");
  
message.channel.send(`${emoji.correcto} Rol entregado, ahora recibirás una notificación cada vez qué se haga un nuevo sorteo.`);
  
}else if(args[0] === "prefieres"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719949834378805309")
  
message.channel.send(`${emoji.correcto} Rol entregado, ahora recibirás una notificación cada vez qué se envié un nuevo **¿Qué prefieres?**`);
}else if(args[0] === "actualizaciones"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719953921287782420")
  
message.channel.send(`${emoji.correcto} Rol entregado, ahora recibirás una notificación cada vez qué se actualize **Crypto**! ${emoji.crypto}`);
}else{
  message.channel.send(`${emoji.incorrectoGif} ¡Error!\n\n<:list:702555554584723526> Opciones: **'sorteos'** , **'prefieres'** , **'actualizaciones'**\n${emoji.correcto} Uso Correcto: \`c!role <nombre>\``)
}

}

module.exports.help = {
  name: "role",
  aliases: []
}
