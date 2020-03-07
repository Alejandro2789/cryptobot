const Discord = require("discord.js");
const db = require("megadb");
let advertencias = new db.crearDB("advertencias");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

 let usuario = message.mentions.members.first();
 if(!usuario) return message.channel.send("<:red_tick:642577040872308766> Mencione a un usuario.")
 let warns_user = await advertencias.obtener(`${message.guild.id}.${usuario.id}`);
 if(warns_user.length <= 0) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** el usuario no cuenta con advertencias.`);
  
   var text = "";
  const e = await advertencias.obtener(`${message.guild.id}.${usuario.id}`).catch(e => console.log(e.message))
 
    for (var i = 0; i < e.length; i++) {
      text += `
— — — — — —
· Staff: ${e[i].moderador}
· Razón: ${e[i].razon}
· Fecha: ${e[i].hora}
· ID: ${e[i].codigo}
— — — — — —`
      
     
    }
      const embed = new Discord.RichEmbed()
      .setTitle(`Advertencias de ${usuario.user.username}`)
      .setColor("#D96465")
      .setDescription(` \`\`\`${text}\`\`\` `)
      message.channel.send(embed)

  
}
module.exports.help = {
  name: "see_warns",
  aliases: ["advertencias"]
}