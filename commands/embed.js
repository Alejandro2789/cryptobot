const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
 let [titulo, color, descripcion] = args.join(" ").split("|");
  
    if(!titulo) return message.channel.send(":white_check_mark: Uso correcto: `<prefix>embed <titulo>|<#color_embed_hex>|<descripcion>`")
    
    
        
    const embed = new Discord.RichEmbed()
    .setTitle(`${titulo}`)
    .setColor(`${color}`)
    .setDescription(`${descripcion}`)
    message.channel.send(embed);
}
module.exports.help = {
  name: "embed",
  aliases: []
}