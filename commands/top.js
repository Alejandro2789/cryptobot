const Discord = require("discord.js");
const ms = require("ms");
const db = require('megadb');
let reps_profile = new db.crearDB('reputaciones');
let creditos_profile = new db.crearDB('cantidad_creditos');
const top_pacman = new db.crearDB("top_pacman");
module.exports.run = async(bot, message, args) => {

  
  
let top_credits = await creditos_profile.ordenar(false, false).catch(error => error)
let top_reps = await reps_profile.ordenar(false, false).catch(error => error)
let top_pacmann = await top_pacman.ordenar(false, false).catch(error => error)

  const filter = m => m.author.id === message.author.id;
  message.channel.send(":star2: | Top's.\n\nIngrese el nombre del top a ver, el menú deja de funcionar a los **10s.**\nEscriba `cancel` para cerrar el menú.\n```• credits = Créditos.\n• reps = Reputaciones.\n• pacman = Top victorias del pacman.```")
  message.channel.awaitMessages(filter,{
    max: 1,
    time: 10000
  }).then(collected => {
    if(collected.first().content.toLowerCase() === "credits"){
      

let ord = [];
for(var x = 0; x < top_credits.length; x++){
let user = bot.users.has(top_credits[x].clave) ? bot.users.get(top_credits[x].clave).username : `Salió ${top_credits[x].clave}`
ord.push(`[#${parseInt(x+1)}] ${user} ${top_credits[x].valor}`)
}
  
 message.channel.send(`\`\`\`🏅 Rango | Nombre | Créditos\n\n${ord.slice(0, 10).join("\n")}\`\`\``)
      
      
      
      
      
    }else if(collected.first().content.toLowerCase() === "reps"){
      
     let ord = [];
  for(var x = 0; x < top_reps.length; x++){
    let user = bot.users.has(top_reps[x].clave) ? bot.users.get(top_reps[x].clave).username : `Salió ${top_reps[x].clave}`
   ord.push(`[#${parseInt(x+1)}] ${user} ${top_reps[x].valor}`)
  }
  
 
 message.channel.send(`\`\`\`🏅 Rango | Nombre | Reps\n\n${ord.slice(0, 10).join("\n")}\`\`\``)


    }else if(collected.first().content.toLowerCase() === "pacman"){
      
       let ord = [];
  for(var x = 0; x < top_pacmann.length; x++){
    let user = bot.users.has(top_pacmann[x].clave) ? bot.users.get(top_pacmann[x].clave).username : `Salió ${top_pacmann[x].clave}`
   ord.push(`[#${parseInt(x+1)}] ${user} ${top_pacmann[x].valor}`)
  }
  
 
 message.channel.send(`\`\`\`🏅 Rango | Nombre | Victorias\n\n${ord.slice(0, 5).join("\n")}\`\`\``)
      
    }else if(collected.first().content.toLowerCase() === "cancel"){
      message.channel.send("Cerrando menú.")
    
    }
  })
  
  
}
module.exports.help = {
  name: "top",
  aliases: []
}

