const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

    const one = Math.floor(Math.random() * 100) + 1;
    const two = Math.floor(Math.random() * 50) + 1;
 const three = Math.floor(Math.random() * 20) + 1;
  
    const minesweeper = new Minesweeper({ one, two, three });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.send(emoji.incorrectoGif + ` **${message.author.name},** Ha ocurrido un error.`);

}
module.exports.help = {
  name: "bminas",
  aliases: []
}