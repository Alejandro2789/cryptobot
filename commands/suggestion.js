const Discord = require("discord.js");
const db = require("megadb");
const suge = new db.crearDB("canal_sugerencias");
const sugerencias = new db.crearDB("sugerencias_formato");
const cantidad_sugerencias = new db.crearDB("cantidad_sugerencias");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

 let colores = ["#efa94a" , "#E3938B" , "#AC857D" , "#5564eb" , "#abcdef" , "#18d087"];
 let final = colores[Math.floor(Math.random() * colores.length)]
 const numero_s = Math.floor(Math.random() * Math.floor(10000));
 
 if(!cantidad_sugerencias.tiene(message.guild.id)){
   cantidad_sugerencias.establecer(message.guild.id, 1);
 }else{
   cantidad_sugerencias.sumar(message.guild.id, 1);
 };
  
 let numero_sugerencia = cantidad_sugerencias.tiene(message.guild.id) ? await cantidad_sugerencias.obtener(message.guild.id) : "1";
  
 let c = suge.tiene(message.guild.id) ? await suge.obtener(message.guild.id) : message.channel;
 let canal = message.guild.channels.get(c)
 if(!suge.tiene(message.guild.id)) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username},** No hay canal de sugerencias establecido.`);
  
  let sugerencia = args.join(" ");
  if(!sugerencia) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Ingrese la sugerencia a enviar.`);
  message.react("✅")
  
  const embed = new Discord.RichEmbed()
  .setTitle("⭐ ╏ Nueva sugerencia!")
  .setDescription(`${sugerencia}`)
  .addField(`**• Sugerente:**`,message.author.tag)
  .addField(`**• ID Sugerencia:**`, numero_sugerencia)
  .setFooter(message.guild.name, message.guild.iconURL)
  .setColor(final)
  .setFooter(`⏫ Apoyo la idea. | ⏬ No apoyo la idea.`)
   let msg = await canal.send(embed)
   await msg.react('⏫');
   await msg.react('⏬');


if (!sugerencias.tiene(message.guild.id)){
sugerencias.establecer(message.guild.id, [{ID: numero_sugerencia, sugerencia: args.join(" "), autor: message.author.tag}]).catch(error => console.log(error))
} else {
sugerencias.push(message.guild.id, {ID: numero_sugerencia, sugerencia: args.join(" "), autor: message.author.tag}).catch(error => console.log(error))
}



}
module.exports.help = {
  name: "suggestion",
  aliases: ["s"]
}