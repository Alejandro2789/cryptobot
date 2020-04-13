const Discord = require("discord.js");
const ms = require("ms");
const db = require('megadb');
let reps_profile = new db.crearDB('reputaciones');
let creditos_profile = new db.crearDB('cantidad_creditos');
const emoji = require("../emojis.json");
module.exports.run = async(bot, message, args) => {

  
  
let top_credits = await creditos_profile.ordenar(false, false).catch(error => error)
let top_reps = await reps_profile.ordenar(false, false).catch(error => error)

      
if(args[0] === "credits"){
let ord = [];
for(var x = 0; x < top_credits.length; x++){
let user = bot.users.has(top_credits[x].clave) ? bot.users.get(top_credits[x].clave).username : `Salió ${top_credits[x].clave}`
ord.push(`⋆ ${parseInt(x+1)}  ${user}      $${top_credits[x].valor}`)
}
  
 const topEmbed = new Discord.RichEmbed()
 .setDescription(`🏅 ・ Nombre  Créditos\n\n${ord.slice(0, 10).join("\n")}`)
 .setColor("RANDOM")
 .setFooter(`‧ Solicitado por ${message.author.username}!`)
 
 message.channel.send(topEmbed)
}else if(args[0] === "reps"){
      
      
      
  
      
    
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
  
    
    }
  
  
  
}
module.exports.help = {
  name: "top",
  aliases: []
}


