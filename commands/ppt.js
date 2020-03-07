const Discord = require("discord.js");
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");

module.exports.run = async (bot, message, args) => {

  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
       prefix = "c!"
       }
  
   var choice = args[0];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = "Yo elijo **Scissors**! :v: Yo gano!"
    } else if (choice2 == "paper") {
      var response = "Yo elijo **Paper**! :hand_splayed: Es un empate!"
    } else {
      var response = "Yo elijo **Rock**! :punch: Tú ganas!"
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = "Yo elijo **Paper**! :hand_splayed: Yo gano!"
    } else if (choice2 == "rock") {
      var response = "Yo elijo **Rock**! :punch: Es un empate!"
    } else {
      var response = "Yo elijo **Scissors**! :v: Tú ganas!"
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "Yo elijo **Paper**! :hand_splayed: Tú ganas!"
    } else if (choice2 == "scissors") {
      var response = "Yo elijo **Scissors**! :v: Es un empate!"
    } else {
      var response = "Yo elijo **Rock**! :punch: Yo gano!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Uso correcto: \`${prefix}ppt\` <rock|paper|scissors>`);
  }

}
module.exports.help = {
  name: "ppt",
  aliases: []
}