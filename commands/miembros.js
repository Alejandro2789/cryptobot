const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

   
 let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
     let dnd = message.guild.members.filter(member => member.user.presence.status !== 'dnd');
      let sicon = message.guild.iconURL;
    
    const miembrosembed = new Discord.RichEmbed()
     .setTitle("✯ Conteo de miembros ✯")
     .setThumbnail(sicon)
     .addField("• Miembros", message.guild.memberCount)
     .addBlankField(true)
    .setColor("#89eff4")
    .addField("• 🧑Humanos", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
     .addField("• 🤖Bots", message.guild.members.filter(m => m.user.bot).size)
   .addField('• Estado de los miembros', `${emoji.enlinea} ${message.guild.members.filter(o => o.presence.status === 'online').size} **Online**\n${emoji.ausente} ${message.guild.members.filter(i => i.presence.status === 'idle').size} **Inactivo / Ausente**\n${emoji.ausente} ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} **No molestar**\n${emoji.desconectado} ${message.guild.members.filter(off => off.presence.status === 'offline').size} **Desconectado/Invisible**\n${emoji.streaming} ${message.guild.members.filter(s => s.presence.status === 'streaming').size} **Streaming**`);
      message.channel.send(miembrosembed);
  
}
module.exports.help = {
  name: "miembros",
  aliases: []
}