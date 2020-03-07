const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

 if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

const guild = message.guild;
  
const nombre = args.join(" ");
if(!nombre) return message.channel.send("<:incorrecto:558845297447403558> | Ingrese el nombre de la categoria a crear.").then(m => m.delete(4000))
  
guild.createChannel(nombre, 'category')
  
  
  const embed = new Discord.RichEmbed()
.setTitle("<:correcto:558845268800307229> | __Categoria Creada.__")
.setColor("#0000ff")
.setDescription(`**Nombre:** \`${nombre}\``)

message.channel.send(embed)

}
module.exports.help = {
  name: "create-category",
  aliases: ["crearcategoria"]
}