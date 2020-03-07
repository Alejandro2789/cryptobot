const Discord = require("discord.js");
const db = require("megadb");
const medallas = new db.crearDB("medallas");
let reps_profile = new db.crearDB("reputaciones");
let creditos_profile = new db.crearDB("cantidad_creditos");
let descripción = new db.crearDB('descripciones_profile');
let esposo = new db.crearDB('esposo_profile');
let background = new db.crearDB("fondos_profile");

module.exports.run = async (bot, message, args) => {

   let usuario = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    if (usuario.user.bot) return message.channel.send('Los bots no tienen perfil.').then(m => m.delete(3000));
  
    let reps = reps_profile.tiene(usuario.id) ? await reps_profile.obtener(usuario.id) : "0";
    let credits = creditos_profile.tiene(usuario.id) ? await creditos_profile.obtener(usuario.id) : "0";
    let description = descripción.tiene(usuario.id) ? await descripción.obtener(usuario.id) : "Sin descripción.";
    let esposose = esposo.tiene(usuario.id) ? bot.users.get(await esposo.obtener(usuario.id)).tag : "Nadie.";
    let fondo = background.tiene(usuario.id) ? await background.obtener(usuario.id) : "https://i.imgur.com/7GbjI86.png";
  
  
  
  if(!medallas.tiene(usuario.id)){
  medallas.establecer(usuario.id, [{medalla:"👤"}])
}
 var text = "";
  const e = medallas.tiene(usuario.id) ? await medallas.obtener(usuario.id) : "";
  
     
  for (var i = 0; i < e.length; i++) {
    text+= ` · ${e[i].medalla}`
}
  
  
    const embed = new Discord.RichEmbed()
      .setTitle(`💠 | Perfil de ${usuario.user.username}`)
      .setDescription(description)
      .addField(":dollar: | **Créditos:**", `$${credits}`)
      .addField(":medal: | **Reputación:**", reps)
      .addField(":two_hearts: | **Casado con:**", esposose)
      .addField("🏷️ | Medallas:", `${text} `)
      .setImage(fondo)
    
      return message.channel.send(embed)
  
  

    


}
module.exports.help = {
  name: "profile",
  aliases: ["perfil"]
}

