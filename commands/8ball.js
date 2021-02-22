const Discord = require("discord.js");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
 
    let pregunta = args.slice(1).join(" ");
    if (!pregunta)
      return message.channel
        .send(emoji.incorrecto + ` **${message.author.username},** Escriba una pregunta.`)
        .then(m => m.delete(3000));

    var choices = [
      //alejandroquesada09
      "✦ **Es cierto.**",
      "✦ **Es decididamente así.**",
      "✦ **Sin duda.**",
      "✦ **Si definitivamente.**",
      "✦ **Puedes confiar en ello.**",
      "✦ **Usted puede contar con él.**",
      "✦ **Como yo lo veo, sí.**",
      "✦ **Más probable.**",
      "✦ **Perspectivas buenas.**",
      "✦ **Si.**",
      "✦ **Las señales apuntan a que si.**",
      "✦ **Absolutamente.**",
      "✦ **Respuesta confusa, intenta otra vez.**",
      "✦ **Pregunta de nuevo mas tarde.**",
      "✦ **Mejor no decirte ahora.**",
      "✦ **No se puede predecir ahora.**",
      "✦ **Concentrate y pregunta mas tarde.**",
      "✦ **No cuentes con ello.**",
      "✦ **Mi respuesta es no.**",
      "✦ **Mis fuentes dicen que no.**",
      "✦ **La perspectiva no es tan buena.**",
      "✦ **Muy dudoso.**",
      "✦ **Las posibilidades no son buenas.**"
    ];
  
    var embed = new Discord.MessageEmbed()
      .setAuthor("Crypto 8ball" , "http://www.pngmart.com/files/3/8-Ball-Pool-PNG-Photos.png")
      .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
      .setColor("RANDOM");

      message.channel.send(embed);
};
module.exports.help = {
  name: "8ball",
  aliases: ["8", "8bola", "bola8", "bolamagica"]
};
