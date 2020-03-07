const Discord = require("discord.js");
let db = require("megadb");
let prefix_db = new db.crearDB("prefixes");
module.exports.run = async (bot, message, args) => {

let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
       prefix = "c!"
       }

const embed = new Discord.RichEmbed()
.setTitle(":dollar: | Menú de ayuda de economía.")//mine fish apostar pay
.addField(":pick: Mine" , "Mina y consigue créditos!")
.addField(":fishing_pole_and_fish: Fish" , "Pesca y consigue peces valorados. Cada vez qué hagas una pesca se rebajan $10 créditos de tu cuenta.")
.addField(":game_die: Apostar" , `Apuesta una cantidad de créditos a la suerte, si sale el mismo número ganas la cantidad apostada, si sale diferente se te desceuntan de tu balance la cantidad apostada!\n**Uso:** \`${prefix}apostar <cantidad> <numero_a_apostar>\`\n**Ejemplo:** \`${prefix}apostar 1000 3\n\``)
.addField(":moneybag: Transfer" , `Paga a un usuario una cantidad de créditos determinada.\n**Uso:** \`${prefix}pay @Usuario <cantidad>\`\n**Ejemplo:** \`${prefix}pay @Alejandro 500\``)
.addField(":handbag: Shop" , "Muestra la tienda del bot, podrás comprar items para después venderlos. Podrás usar las reacciones/emojis para moverte entre las páginas.")
.addField(":credit_card: Buy" , `Compra un ítem de la tienda.\n**Uso:** \`${prefix}buy <objeto>\`\n**Ejemplo:** \`${prefix}buy caña\``)
.addField(":heavy_dollar_sign: Sell" , `Vende un objeto que tengas en tu inventario.\n**Precio final:** Cantidad x Precio de venta.\n**Uso:** \`${prefix}sell <objeto> <cantidad>\`\n**Ejemplo:** \`${prefix}sell caña 10\``)
.setFooter(message.author.username, message.author.avatarURL).setTimestamp()
.setColor(0x00AE86)
 .setThumbnail(bot.user.displayAvatarURL)
message.channel.send(embed)
  
}
module.exports.help = {
  name: "help_economy",
  aliases: ["ayuda_economia"]
}
