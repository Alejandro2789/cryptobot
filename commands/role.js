const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

if(message.guild.id !== "52004870881804289") return;
  
  
  
if(args[0] === "sorteos"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719953581100236850");
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué se haga un nuevo sorteo.**");
  
}else if(args[0] === "prefieres"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719949834378805309")
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué salga un anuncio nuevo.**");
}else if(args[0] === "actualizaciones"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("719953921287782420")
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué se actualize Crypto!**");
}else{
  message.channel.send("Rol equivocado!\n\n- Opciones: **'sorteos'** , **'anuncios'** , **'actualizaciones'**")
}

}

module.exports.help = {
  name: "role",
  aliases: []
}
