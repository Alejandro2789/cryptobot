const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let roll = message.content.split(' ').slice(1);
if(roll < 0) return message.reply(`Escriba un número entre 1 y 100!`);
if(roll > 100) return message.reply(`Escriba un número entre 1 y 100!`);
    
let randomroll  = Math.floor(Math.random() * roll) + 1;
let random = Math.floor(Math.random() * 100) + 1;
    //const index = Math.floor(Math.random() * (actividades.length - 1) + 1);
if(!roll[0]){
    message.channel.send('Tu número es: '+random)
    
}else{
    message.channel.send('Del 1 al '+roll+' salió el número: '+randomroll)
}

}
module.exports.help = {
  name: "numero",
  aliases: []
}