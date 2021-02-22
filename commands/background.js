const Discord = require("discord.js");
const db = require("megadb");
let background = new db.crearDB("fondos_profile")
let emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {
  
let Jhonamax = bot.users.get("297037692015738880").tag;
  
if(args[0] === "bc1"){
  background.establecer(message.author.id, "https://i.imgur.com/Mt8TlsV.png");
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#1.**")
  .setImage("https://i.imgur.com/Mt8TlsV.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
}else if(args[0] === "bc2"){
  background.establecer(message.author.id, "https://i.imgur.com/zrFkqs3.png");
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#2.**")
  .setImage("https://i.imgur.com/zrFkqs3.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
  
}else if(args[0] === "bc3"){
  background.establecer(message.author.id, "https://i.imgur.com/6yAUkoq.png");
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#3.**")
  .setImage("https://i.imgur.com/6yAUkoq.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
  
}
  else if(args[0] === "bc4"){
  background.establecer(message.author.id, "https://i.imgur.com/sPQqjiG.png");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#4.**")
  .setImage("https://i.imgur.com/sPQqjiG.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
    
}
  else if(args[0] === "bc5"){
  background.establecer(message.author.id, "https://i.imgur.com/JtNSmmA.jpg");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#5.**")
  .setImage("https://i.imgur.com/JtNSmmA.jpg")
  .setColor("#d0ffff")
  message.channel.send(embed)
    
}
  else if(args[0] === "bc6"){
  background.establecer(message.author.id, "https://i.imgur.com/5mniRFe.png");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#6.**")
  .setImage("https://i.imgur.com/5mniRFe.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
    
}
  else if(args[0] === "bc7"){
  background.establecer(message.author.id, "https://i.imgur.com/dM67QQT.png");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#7.**\nDiseñado por "+Jhonamax)
  .setImage("https://i.imgur.com/dM67QQT.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
    
}else if(args[0] === "bc8"){
  background.establecer(message.author.id, "https://i.imgur.com/of6cXgC.png");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#8.**")
  .setImage("https://i.imgur.com/of6cXgC.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
}else if(args[0] === "bc9"){
   background.establecer(message.author.id, "https://i.imgur.com/nBayhS0.png");
    
    const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.correcto} Fondo equipado!`)
  .setDescription("Te has equipado el fondo **#9.**")
  .setImage("https://i.imgur.com/nBayhS0.png")
  .setColor("#d0ffff")
  message.channel.send(embed)
}else {
message.channel.send(":frame_photo: __Ingrese el número del background a equipar.__\n\n- `https://i.imgur.com/Mt8TlsV.png` : **bc1**\n- `https://i.imgur.com/zrFkqs3.png` : **bc2**\n- `https://i.imgur.com/6yAUkoq.png` : **bc3**\n- `https://i.imgur.com/sPQqjiG.png` : **bc4**\n- `https://i.imgur.com/JtNSmmA.jpg` : **bc5**\n- `https://i.imgur.com/5mniRFe.png` : **bc6**\n- `https://i.imgur.com/dM67QQT.png` : **bc7**\n- `https://i.imgur.com/of6cXgC.png` : **bc8**\n- `https://i.imgur.com/nBayhS0.png` : **bc9**")
}
  
  
}
module.exports.help = {
  name:"background"
}