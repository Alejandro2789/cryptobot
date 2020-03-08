const Discord = require("discord.js");
const ms = require("ms");
const db = require('megadb');
let reps_profile = new db.crearDB('reputaciones');
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {

  
  
let top_credits = await creditos_profile.ordenar(false, false).catch(error => error)
let top_reps = await reps_profile.ordenar(false, false).catch(error => error)

  const filter = m => m.author.id === message.author.id;
  message.channel.send(":star2: | Top's Disponibles.\n\nA continuación, ingrese el nombre del top qué desea ver, este menú dejará de funcionar pasados **10 segundos.**\n:triangular_flag_on_post: Escriba `cancel` para cerrar el menú.\n```• credits = Créditos.\n• reps = Reputaciones.```").then(msg => msg.delete(10000));
  message.channel.awaitMessages(filter,{
    max: 1,
    time: 10000
  }).then(collected => {
    if(collected.first().content.toLowerCase() === "credits"){
      

let ord = [];
for(var x = 0; x < top_credits.length; x++){
let user = bot.users.cache.has(top_credits[x].clave) ? bot.users.cache.get(top_credits[x].clave).username : `Salió ${top_credits[x].clave}`
ord.push(`⋆ ${parseInt(x+1)}  ${user}      $${top_credits[x].valor}`)
}
  
 const topEmbed = new Discord.RichEmbed()
 .setDescription(`🏅 ・ Nombre ・ Créditos\n\n${ord.slice(0, 10).join("\n")}`)
 .setColor("RANDOM")
 .setFooter(`‧ Solicitado por ${message.author.username}!`)
 
 message.channel.send(topEmbed)
      
      
      
      
      
    }else if(collected.first().content.toLowerCase() === "reps"){
      
    
     let ord = [];
  for(var x = 0; x < top_reps.length; x++){
    let user = bot.users.has(top_reps[x].clave) ? bot.users.get(top_reps[x].clave).username : `Salió ${top_reps[x].clave}`
   ord.push(`⋆ ${parseInt(x+1)}  ${user}      ${top_reps[x].valor}`)
  }
      
 const topEmbed = new Discord.RichEmbed()
 .setDescription(`🏅 ・ Nombre ・ Reputaciones\n\n${ord.slice(0, 10).join("\n")}`)
 .setColor("RANDOM")
 .setFooter(`‧ Solicitado por ${message.author.username}!`)
 
 message.channel.send(topEmbed)
    }else if(collected.first().content.toLowerCase() === "cancel"){
      
      message.channel.send(emoji.correcto + ` **${message.author.username},** el menú se ha cerrado correctamente!`).then(msg => msg.delete(5000));
    
    }
  })
  
  
}
module.exports.help = {
  name: "top",
  aliases: []
}


