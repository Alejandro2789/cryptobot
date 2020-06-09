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
let boost_juegos_cantidad = boost_juegos.tiene(`${usuario.id}.tiros`) ? await boost_juegos.obtener(`${usuario.id}.tiros`) : "0";




  
const embed = new Discord.RichEmbed()
.setTitle(`:handbag: Inventario de ${usuario.user.username}`)
.setDescription(`:ring: ${anillos_cantidad}          :pick: ${picos_cantidad}          :fishing_pole_and_fish: ${cañas_cantidad}          :cookie: ${galletas_cantidad}\n:radio: ${radio_cantidad}          <:booster:720047742071865486> ${boost_juegos_cantidad}`)
message.channel.send(embed)
  
}
module.exports.help = {
  name: "inventario",
  aliases: ["inv" , "inventory"]
}