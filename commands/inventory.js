const Discord = require("discord.js");
const db = require("megadb");
const anillo = new db.crearDB("anillos");
const pico = new db.crearDB("picos");
const caña = new db.crearDB("cañas");
const galletaa = new db.crearDB("galletas");
const radioo = new db.crearDB("radios");
const boost_juegos = new db.crearDB("boost_juegos");

module.exports.run = async (bot, message, args) => {

  
let usuario = message.mentions.members.first() || message.member;

let anillos_cantidad = anillo.tiene(usuario.id) ? await anillo.obtener(usuario.id) : "0";
let picos_cantidad = pico.tiene(usuario.id) ? await pico.obtener(usuario.id) : "0";
let cañas_cantidad = caña.tiene(usuario.id) ? await caña.obtener(usuario.id) : "0";
let galletas_cantidad = galletaa.tiene(usuario.id) ? await galletaa.obtener(usuario.id) : "0";
let radio_cantidad = radioo.tiene(usuario.id) ? await radioo.obtener(usuario.id) : "0";
let boost_juegos_cantidad = boost_juegos.tiene(`${usuario.id}.tiros`) ? await boost_juegos.obtener(`${usuario.id}.tiros`) : "0";//          <:boost:632677966802976895> ${boost_juegos_cantidad}


  /*
"<:gema_esmeralda:576829078141796372>",
                 "<:gema_rubi:576827705270599707>",
                 "<:gema_diamante:576829104762912778>",
                 "<:gema_oro:576829131736612894>"*/

  
const embed = new Discord.RichEmbed()
.setTitle(`:handbag: Inventario de ${usuario.user.username}`)
.setDescription(`:ring: ${anillos_cantidad}          :pick: ${picos_cantidad}          :fishing_pole_and_fish: ${cañas_cantidad}          :cookie: ${galletas_cantidad}\n:radio: ${radio_cantidad}          <:boost:632677966802976895> ${boost_juegos_cantidad}`)
message.channel.send(embed)
  
}
module.exports.help = {
  name: "inventario",
  aliases: ["inv" , "inventory"]
}//\n<:gema_esmeralda:576829078141796372> ${esmeralda_cantidad}          <:gema_rubi:576827705270599707> ${rubi_cantidad}          <:gema_diamante:576829104762912778> ${diamante_cantidad}          <:gema_oro:576829131736612894> ${oro_cantidad}      <:royal_box:576888357074894848> ${cajas_cantidad}
