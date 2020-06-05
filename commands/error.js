const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
let canal = bot.channels.get("702674835343409193");
        
let error = args.join(' ');
if(!error) return message.channel.send("Ingrese el error a reportar!\nUsar de manera correcta este comando, de no ser así serás añadido a la blacklist!")
if(error.length <)   
   
    
    const embed = new Discord.RichEmbed()
    .setColor("#87CEFA")
    .setTitle("• Un error fue reportado!")
    .addField("**▸ Error:**", error)
    .addField("**▸ Info:**", `»__Usuario:__ ${message.author.tag}\n»__ID usuario:__ ${message.author.id}\n»__Servidor:__ ${message.guild.name}`)
    .setTimestamp()
    .setFooter("✅ Error reparado. | ❌ No reparado.")
    message.channel.send(":white_check_mark: | Error enviado, gracias por reportarlo!")
    let msg = await canal.send(embed)
    await msg.react("✅");
    await msg.react("❌");
  
}
module.exports.help = {
  name: "error",
  aliases: []
}