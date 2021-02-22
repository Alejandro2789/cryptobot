const Discord = require("discord.js");
const db = require("megadb");
const suge = new db.crearDB("canal_sugerencias");
let prefix_db = new db.crearDB("prefixes");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
  
   let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
       prefix = "c!"
       }
  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`)
 
  let id_canal = await suge.obtener(message.guild.id);
  
  let argumentos = args.join(" ").split(" | ");//La ID es argumentos[0] y la respuesta es argumentos[1];
  
  let guild = message.guild;
  if(!argumentos[0]) return message.channel.send(`__Formato de respuesta inválido.__\n\n**Uso correcto:** \`${prefix}reply <ID_Mensaje> | <Respuesta>\`\nDebes de respetar los espacios en el comando, de lo contrario no funcionará correctamente.`)

 
  if(isNaN(argumentos[0])) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** Necesitas colocar la cantidad a tranferir, no símbolos ni letras.`).then(m => m.delete(3000))

  bot.channels.get(id_canal).fetchMessage(argumentos[0]).then(messagea => messagea.edit(messagea.content  +  ` \n\n▸ Respuesta por ${message.author.username}:\n\n**${argumentos[1]}**`)).then(x => message.channel.send("La sugerencia se ha editado con éxito.").then(x => x.react("✅")))
    
  .catch(() => {
      message.channel.send(emoji.incorrectoGif + ` Esa ID no le corresponde a ningún mensaje.`)
    })
                                                         
  
             



}
module.exports.help = {
  name: "reply",
  aliases: ["responder"]
}