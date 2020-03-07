const Discord = require("discord.js");
 //const moment = require("moment");
//require("moment-duration-format");

module.exports.run = async (bot, message, args) => {

  
  
   function T_convertor(ms) {      
      let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
      let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor(((ms) % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor(((ms) % (1000 * 60)) / 1000);


      let final = ""
      if(años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `
      if(meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `
      if(dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `
      if(horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `
      if(minutos > 0) final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `
      if(segundos > 0) final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`
      return final
  }
  
  
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
const permisos = new Discord.Permissions(member.highestRole.permissions).toArray().join(" ")
 
  
  let status = {
      "online": "<:online:538111830242099220> En línea",
      "idle": "<:idle:538111863309991966> Ausente",
      "dnd": "<:dnd:538111914014670908> No molestar",
      "offline": "<:3268_discord_invisible:539596783085420565> Desconectado/Invisible"
};
  

    
   let bote;
  if (member.user.bot === true) {
    bote = "Sí.";
  } else {
    bote = "No.";
  }
  
  
  const embed = new Discord.RichEmbed()
  .setDescription(`Información sobre ${member.user.tag}.`)
  .addField("▸ Apodo:" , `${member.nickname !== null ? `Apodo: ${member.nickname}` : "No tiene apodo."}`)
  .addField("▸ ID del usuario:" , `${member.id}`)
  .addField("▸ Es un bot?" , `${bote}`)
  .addField("▸ Status:" , `${status[member.user.presence.status]}`)
  .addField("▸ Juego:" , `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ningún juego."}`)
  .addField("▸ Roles:" , `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sin Roles."}`)
  .addField("▸ Fecha de ingreso:", `${message.member.joinedAt.toDateString()}`)
  .addField("▸ Registro:" , `${member.user.createdAt.toDateString()}(**${T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp)}**)`)
  .addField("▸ Permisos:" , '```js\n'+permisos+'```')
  .setFooter(member.user.username, member.user.avatarURL)
  .setColor("RANDOM")
  message.channel.send(embed)
}
module.exports.help = {
  name: "user",
  aliases: []
}