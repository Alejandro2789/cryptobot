const Discord = require("discord.js");
const db = require("megadb");
const regalo = new db.crearDB("regalos");
let creditos_profile = new db.crearDB('cantidad_creditos');
let reps_profile = new db.crearDB('reputaciones');
const boost_juegos = new db.crearDB("boost_juegos");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if (message.author.id !== "401083681923661825") return; 
  
let regaloss = regalo.tiene(message.author.id) ? await regalo.obtener(message.author.id) : "0";
//if(!regalo.tiene(message.author.id)) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes regalos en tú inventario.`);
if(regaloss <= "0") return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes regalos en tú inventario.`);
  
let regalos = ["<:moneda:588186275563962388> $500 créditos",
               "💮 6 reputaciones",
               "<:boost:632677966802976895> 5 booster de juegos"];
  
let regalos_usuario = ["<:moneda:588186275563962388> $1500 créditos",
                       "💮 15 reputaciones",
                       "<:boost:632677966802976895> 20 booster de juegos"];
  
let final_m = regalos[Math.floor(regalos.length * Math.random())];
let final_u = regalos_usuario[Math.floor(regalos_usuario.length * Math.random())];
let usuario = message.mentions.members.first();
  
if(!usuario){
  
  const primerEmbed = new Discord.RichEmbed()
  .setColor("#C51D34")
  .setDescription("🥡 Abriendo regalo...")
  .setFooter(message.author.username, message.author.avatarURL)
  .setThumbnail("https://www.eternityrose.co.uk/skin/frontend/base/default/eternityrose/wedding-gift-uk/images/wedding-gift-idea-gift-voucher.jpg")
  message.channel.send(primerEmbed).then(m => {
   
      setTimeout(function() {
       
  const giftEmbed_m = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`:gift: **${message.author.username}** abriste un regalo y ganaste **${final_m}**!`)
.setFooter(message.author.username, message.author.avatarURL)
.setThumbnail("https://www.eternityrose.co.uk/skin/frontend/base/default/eternityrose/wedding-gift-uk/images/wedding-gift-idea-gift-voucher.jpg")

m.edit(giftEmbed_m)
        
      }, 1000)});
  
if(final_m === "<:moneda:588186275563962388> $500 créditos"){
  
  if(!creditos_profile.tiene(message.author.id)){
    creditos_profile.establecer(message.author.id, 500)
     console.log("No tenía créditos y se los añadí.");
  }else{
    creditos_profile.sumar(message.author.id, 500)
     console.log("Si tenía créditos y le sumé.");
  }
  
}else if(final_m === "💮 6 reputaciones"){
  
  if(!reps_profile.tiene(message.author.id)){
    reps_profile.establecer(message.author.id, 6)
    console.log("No tenía reps.");
  }else{
    reps_profile.sumar(message.author.id, 6)
    console.log("Si tenía reps, le sumé.");
  }

}else if(final_m === "<:boost:632677966802976895> 5 booster de juegos"){
  
  if(!boost_juegos.tiene(message.author.id)){
    boost_juegos.establecer(message.author.id, 5)
    console.log("No tenía boost y lo añadí.");
  }else{
    boost_juegos.sumar(message.author.id, 5)
    console.log("Si tenía boosts y lo sumé.");
  }
}
  regalo.restar(message.author.id, 1);
   return;
}else{
  
  
  
  const giftEmbed_u = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`🥡 **${usuario.user.username}** abriendo regalo...`)
.setFooter(message.author.username, message.author.avatarURL)
.setThumbnail("https://www.eternityrose.co.uk/skin/frontend/base/default/eternityrose/wedding-gift-uk/images/wedding-gift-idea-gift-voucher.jpg")

  message.channel.send(giftEmbed_u).then(m => {
   
      setTimeout(function() {
       
  const giftEmbed_m = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`:gift: **${message.author.username}** le dió a **${usuario.user.username}** un regalo y ganó **${final_u}**!`)
.setFooter(message.author.username, message.author.avatarURL)
.setThumbnail("https://www.eternityrose.co.uk/skin/frontend/base/default/eternityrose/wedding-gift-uk/images/wedding-gift-idea-gift-voucher.jpg")

m.edit(giftEmbed_m)
        
      }, 1000)});
}
  
if(final_u === "<:moneda:588186275563962388> $1500 créditos"){

  if(!creditos_profile.tiene(usuario.id)){
    creditos_profile.establecer(usuario.id, 1500)
     console.log("No tenía créditos y se los añadí.");
  }else{
    creditos_profile.sumar(usuario.id, 1500)
     console.log("Si tenía créditos y le sumé.");
  }
  
}else if(final_u === "💮 15 reputaciones"){
  
  if(!reps_profile.tiene(usuario.id)){
    reps_profile.establecer(usuario.id, 15)
     console.log("No tenía reps.");
  }else{
    reps_profile.sumar(usuario.id, 15)
     console.log("Si tenía reps, le sumé.");
  }

}else if(final_u === "<:boost:632677966802976895> 20 booster de juegos"){
  
  if(!boost_juegos.tiene(`${usuario.id}.tiros`)){
    boost_juegos.establecer(`${usuario.id}.tiros`, 20)
     console.log("No tenía boost y lo añadí.");
  }else{
    boost_juegos.sumar(`${usuario.id}.tiros`, 20)
     console.log("Si tenía boosts y lo sumé.");
  }
}
  
  
regalo.restar(message.author.id, 1);

}
module.exports.help = {
  name: "gift",
  aliases: []
}
