const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  /*
let sugecanal = bot.channels.get("520078712570511370");

     let suge = args.join(' ');
    if(!suge) return message.channel.send("Ingrese la sugerencia a enviar.")
    
    const sugemebed = new Discord.RichEmbed()
    .setColor("#87CEFA")
    .setTitle("• Nueva Sugerencia!")
    .addField("**▸ Sugerencia:**", suge)
    .addField("**▸ Info:**", `»__Usuario:__ ${message.author.tag}\n»__ID usuario:__ ${message.author.id}\n»__Servidor:__ ${message.guild.name}`)
    //.setDescription(`Nos ha llegado una nueva sugerencia!:heart:\n\n**De parte de:** ${message.author.tag}\n**Sugerencia:** ${suge}`)
      message.channel.send("Gracias por sugerir, de esa manera ayudas a mejorar el bot. <3")
   // sugecanal.send(sugemebed);
    let msg = await sugecanal.send(sugemebed);
   
   await msg.react('⏫');
   await msg.react('⏬');
  */
}
module.exports.help = {
  name: "botsuggestion",
  aliases: []
}