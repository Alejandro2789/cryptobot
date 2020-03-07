const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
if(message.author.id !== "401083681923661825") return message.channel.send("No tienes permisos para usar esto.")
  
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  console.log(`\n${message.author.username}#${message.author.discriminator} Used .Eval Command On ${message.guild.name}`)
    let argresult = args.join(' ');
    if (message.author.id !==  '401083681923661825') {
          message.channel.send('No tienes permisos.');
          return; 
        }
        if (!argresult) {
          return message.channel.send("Especifica un codigo.");
        }
  
        try {
  
          var evaled = eval(argresult);
  
          if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
         if (evaled.includes(bot.token)) {
            console.log(`\n${message.author.username}#${message.author.discriminator} Try To Get The Bot Token On ${message.guild.name} (ServerID: ${message.guild.id}).\n`)
            return message.channel.send("", {
             embed: {
                color: 0xFF5733,
                title: ':exclamation::exclamation: No :exclamation::exclamation:',
                description: `No Token Para Usted!`
             }
            });
          }
  
          let embed = new Discord.RichEmbed()
          .addField("**Entrada:**", "```" + args.join(" ") + "```")
          .addField("**Salida:**", "```" + clean(evaled) + "```")
          .setColor("RANDOM")
    
          message.channel.send({embed})
  
        } catch (err){
  
          message.channel.send(new Discord.RichEmbed()
          .addField(`${bot.user.username} - JavaScript Eval Error:`, "Hubo un problema con el código que intentas ejecutar!")
          .addField("Error:", "```" + clean(err) + "```")
          .setColor("RANDOM"))
          
              .catch( error => message.channel.send(`**Error:** ${error.message}`))
        }

}
module.exports.help = {
  name: "eval",
  aliases: []
}