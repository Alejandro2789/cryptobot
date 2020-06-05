const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

   
let canal = bot.channels.get("702674835343409193");
        
let error = args.join(' ');
if(!error) return message.channel.send(emoji.incorrecto + `**${message.author.username},** Ingrese el error a reportar!\n:rotating_light: Usar de manera correcta este comando, de no ser así serás añadido a la **blacklist**!`)
if(error.length < 4) return message.channel.send(emoji.incorrectoGif + `**${message.author.username},** El mensaje debe contener al menos 4 carácteres.`)  
   
    
    const embed = new Discord.RichEmbed()
    .setColor("#87CEFA")
    .setTitle("• Un error fue reportado!")
    .addField("**▸ Error:**", error)
    .addField("**▸ Info:**", `»__Usuario:__ ${message.author.tag}\n»__ID usuario:__ ${message.author.id}\n»__Servidor:__ ${message.guild.name}`)
    .setTimestamp()
    .setFooter("✅ Error reparado. | ❌ No reparado. | ❓ Dudoso.")
    message.channel.send(":white_check_mark: | Error enviado, gracias por reportarlo!")
    let msg = await canal.send(embed)
    await msg.react("✅");
    await msg.react("❌");
    await msg.react("❓");
}
module.exports.help = {
  name: "error",
  aliases: []
}