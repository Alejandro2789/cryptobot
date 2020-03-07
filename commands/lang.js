const Discord = require("discord.js");
const db = require("megadb");
const idioma = new db.crearDB("lenguaje");
let prefix_db = new db.crearDB("prefixes");
module.exports.run = async (bot, message, args) => {


  
let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
       prefix = "c!"
       }
let idioma_actual = idioma.tiene(message.author.id) ? await idioma.obtener(message.author.id) : "español";
  
  if(args[0] === "en"){
    if(idioma_actual === "ingles") return message.channel.send("You already have the English Language.")
    idioma.establecer(message.author.id, "ingles")
    message.channel.send("<:yep:539596813737656330> The language has been changed to English.")
  }else if(args[0] === "es"){
     idioma.eliminar(message.author.id)
    message.channel.send("<:yep:539596813737656330> El idioma se ha cambiado a español.")
  }else{
    message.channel.send("Elige el Idioma por el cuál vas a usar el bot, idiomas disponibles:\n```✦ Uso: "+prefix+"lang <idioma>\n\n• en = English\n• es = Español```")
  }
  
}
module.exports.help = {
  name: "lang",
  aliases: ["idioma"]
}
