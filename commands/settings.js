const Discord = require("discord.js");
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");
const welcome_channel = new db.crearDB("welcome_channel");
const suge = new db.crearDB("canal_sugerencias");
const canal_mod = new db.crearDB("canales_mods");
const channel_logs = new db.crearDB("channel_logs");
const reportes_canal = new db.crearDB("reportes_canal");
module.exports.run = async (bot, message, args) => {

  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
       prefix = "c!"
       }
  
  
let bienvenidas = welcome_channel.tiene(message.guild.id) ? await welcome_channel.obtener(message.guild.id) : "Sin canal.";
let sugerencias = suge.tiene(message.guild.id) ? await suge.obtener(message.guild.id) : "Sin canal.";
let mod = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : "Sin canal.";
let log = channel_logs.tiene(message.guild.id) ? await channel_logs.obtener(message.guild.id) : "Sin canal.";
let report = reportes_canal.tiene(message.guild.id) ? await reportes_canal.obtener(message.guild.id) : "Sin canal."


let canal_b = message.guild.channels.get(bienvenidas);
let canal_s = message.guild.channels.get(sugerencias);
let canal_m = message.guild.channels.get(mod);
let canal_l = message.guild.channels.get(log)
let canal_r = message.guild.channels.get(report)
if(canal_b === undefined) canal_b = "Sin canal.";
if(canal_s === undefined) canal_s = "Sin canal.";
if(canal_m === undefined) canal_m = "Sin canal.";
if(canal_l === undefined) canal_l = "Sin canal.";
if(canal_r === undefined) canal_r = "Sin canal.";
  
const embed = new Discord.RichEmbed()
.setTitle("🔧 | Configuración del servidor.")
//.addField("• Bienvenidas:", `${canal_b}`)
.addField("• Prefix:", `${prefix}`)
.addField("• Sugerencias:", `${canal_s}`)
.addField("• Moderación:", `${canal_m}`)
.addField("• Logs:", `${canal_l}`)
.addField("• Reportes:", `${canal_r}`)
.setColor("PURPLE")
.setThumbnail(message.guild.iconURL)

message.channel.send(embed)

    

}
module.exports.help = {
  name: "settings",
  aliases: []
}