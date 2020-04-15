const Discord = require("discord.js");
const db = require("megadb");


module.exports.run = async (bot, message, args) => {


let users = message.mentions.users.map(m => m.username).join(' y ');
   if(!users) return message.channel.send('<:incorrecto:558845297447403558> | Mencioné a 2 usuarios para calcular, separados por \`"y"\`.').then(m => m.delete(3000));
    
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje de amor entre '+users+' es:')
    .setDescription(heard+' **'+random+' %**'+' '+heard)
    .setColor(0xff4d4d)

message.channel.send({embed}); 

}
module.exports.help = {
  name: "amor",
  aliases: ["love"]
}