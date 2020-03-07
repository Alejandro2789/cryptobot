const Discord = require("discord.js");
const db = require("megadb");
const cantidad_reportes = new db.crearDB("cantidad_reportes");
module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo permisos.")
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<:incorrecto:558845297447403558> | No tienes los permisos necesarios.")
  
if(args[0] === "delete"){
  message.channel.send("<:correcto:558845268800307229> El número de reportes se ha eliminado.");
  cantidad_reportes.eliminar(message.guild.id).catch(error => message.channel.send(error));
  
}else if(args[0] === "set"){
  let cantidad = args[1];
   if(isNaN(cantidad)) return message.channel.send("La cantidad debe ser un número.");
  if(!cantidad) return message.channel.send("Ingrese la cantidad a la cuál se establecen los reportes.");
  
  message.channel.send("<:correcto:558845268800307229> La cantidad de reportes del servidor se ha establecido a "+"**"+cantidad+"**")
  cantidad_reportes.establecer(message.guild.id, cantidad).catch(error => message.channel.send(error));
}else{
 
  const errEmbed = new Discord.RichEmbed()
  .setColor("#5bffff")
  .setTitle("<:incorrecto:558845297447403558> Error: Faltan argumentos.")
  .addField("ℹ Establece el número de reportes del servidor:", "`<prefix>config set <cantidad>`")
  .addField("ℹ Elimina el número de reportes del servidor:", "`<prefix>config delete`")
  message.channel.send(errEmbed)
}

  
}
module.exports.help = {
  name: "config",
  aliases: []
}