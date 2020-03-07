const Discord = require("discord.js");
const db = require("megadb");
const reportes_canal = new db.crearDB("reportes_canal");
const cantidad_reportes = new db.crearDB("cantidad_reportes");
module.exports.run = async (bot, message, args) => {

if(!reportes_canal.tiene(message.guild.id)) return message.channel.send("Deben de configurar el canal de reportes/bugs.")
let c = reportes_canal.tiene(message.guild.id) ? await reportes_canal.obtener(message.guild.id) : message.channel;
let canal = message.guild.channels.get(c)
  
let reporte_numero = cantidad_reportes.tiene(message.guild.id) ? await cantidad_reportes.obtener(message.guild.id) : 0;
if(!cantidad_reportes.tiene(message.guild.id)){
  cantidad_reportes.establecer(message.guild.id, 1)
}else{
  cantidad_reportes.sumar(message.guild.id, 1)
}
  
let reporte = args.join(" ");
if(!reporte) return message.channel.send("Ingrese el error/bug/reporte que vas a enviar.");
  
const REmbed = new Discord.RichEmbed()
.setTitle("⊡ Nuevo Reporte.")
.setColor("RANDOM")
.addField(":bust_in_silhouette: ▸ Usuario:","**"+ message.author.tag+"**")
.addField(":no_entry:  ▸ Error/bug:","**"+ reporte+"**")
.setFooter(`· Reporte #${reporte_numero}`)
  

canal.send(REmbed)
message.channel.send("✅ El reporte/bug ha sido enviado!").then(x => x.react("✅"))
}
module.exports.help = {
  name: "report",
  aliases: []
}
