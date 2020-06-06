const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
.setTitle(emoji.verificado + " Reglas · Crypto Support")
.setDescription("**1.** Respetar a todos los usuarios del servidor. No se permite ningún tipo de racismo.\n\n**2.** Utilizar de manera correcta cada canal. Todos los canales tienen su respectivo uso, de no darle un buen uso recibirá una advertencia.\n\n**3.** No generar discusiones en el servidor, problemas entre usuarios llevarlos a privado.\n\n**4.** No se permiten multicuentas en el servidor.\n\n**5.** El [spam](https://es.m.wikipedia.org/wiki/Spam) y [flood](http://www.gamerdic.es/termino/flood/) no están permitidos en el servidor.\n\n**6.** No se permite cualquier tipo de publicidad de ningún otro tipo de servidor o bot no asociado a **Crypto.**\n\n**7.** No pidas roles o rangos qué no se te han otorgado.\n\n**8.** No están permitidas las menciones excesivas, nosotros también tenemos vida fuera de Discord. Sé paciente y espera. ")
.setFooter("Crypto Bot", "https://cdn.discordapp.com/attachments/600655797403385875/689130817896972291/CryptNewNew.png")

message.channel.send(embed);
}
module.exports.help = {
  name: "reglas",
  aliases: []
}
