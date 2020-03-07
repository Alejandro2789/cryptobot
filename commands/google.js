const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    const busqueda = args.join(' ');
   
   if(!busqueda) return message.channel.send("Ingrese lo que va a buscar.")
 let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link) return message.channel.send("Un error a ocurrido.")
        let embed = new Discord.RichEmbed()
	
   .setColor("RED")
   .setTitle("<:Google:560541040876978227> Google")
 	 .addField(":mag: | Busqueda:", `${args.slice(0).join(' ')}`)
	 .addField(':link: | Link:', `${link}`)
          
	message.channel.send(embed);

}
module.exports.help = {
  name: "google",
  aliases: []
}