const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
.setTitle("Reglas · Crypto Support")
.setDescription("1. Respetar a todos los usuarios del servidor. No se permite ningún tipo de racismo.\n2. Utilizar de manera correcta cada canal. Todos los canales tienen su respectivo uso, de no darle un buen uso recibirá una advertencia.\n3. No generar discusiones en el servidor, problemas entre usuarios llevarlos a privado.\n4. No se permiten multicuentas en el servidor.\n5. El [spam](https://es.m.wikipedia.org/wiki/Spam) y [flood](http://www.gamerdic.es/termino/flood/) no están permitidos en el servidor.\n6. No se permite cualquier tipo de publicidad de ningún otro tipo de servidor o bot no asociado a **Crypto.** ")
.setFooter(`Crypto Bot ${emoji.verificado}`, `https://cdn.discordapp.com/attachments/600655797403385875/689130817896972291/CryptNewNew.png`)
}
module.exports.help = {
  name: "reglas",
  aliases: []
}
