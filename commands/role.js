const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

if(message.guild.id !== "520048708818042890") return;
  
  
  
if(args[0] === "sorteos"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("642438409188671492")
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué se haga un nuevo sorteo.**");
  
}else if(args[0] === "anuncios"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("642440303235563520")
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué salga un anuncio nuevo.**");
}else if(args[0] === "actualizaciones"){
  
let miembro = message.author;
  
message.guild.member(miembro).addRole("539965516903612456")
  
message.channel.send(":white_check_mark: **Rol entregado, ahora recibirás una notificación cada vez qué se actualize Crypto!**");
}else{
  message.channel.send("Rol equivocado!\n\n- Opciones: **'sorteos'** , **'anuncios'** , **'actualizaciones'**")
}

}

module.exports.help = {
  name: "role",
  aliases: []
}
