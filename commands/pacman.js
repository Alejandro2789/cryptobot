const Discord = require("discord.js");
const game = require("pacman-djs");
const db = require("megadb");
const top_pacman = new db.crearDB("top_pacman");
module.exports.run = async(bot, message, args) => {
  
  let mapa = [
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
  "▣▩◇◇◇▩▩▩ᗣ▩▩▩◇◇◇▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣◇▩▩▩▩▩▩ᗣ▩▩▩▩▩▩◇▣",
  "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩◇▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩◇◇◇▩▩▩ᗧ▩▩▩◇◇◇▩▣",
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
]
 
let start = new game.PacGame(mapa, 3, {
  win_text: `💠 ${message.author.username} has ganado!`,
  to_lose_text: `💢 ${message.author.username } has perdido!`,
  time_out_text: "🕰️ ¡Se ha acabado el tiempo!",
  coin_points: 20,
  coin_text: "💵",
  time_text: "⏱️"
})

start.start_game(message)
  
  start.on("end", (type, monedas, tiempo) => {
  if(type == "ghost") {
    //Cuando pierde.
  }
  else if(type == "player") {
     //Cuando gana.
  }
  else if(type == "time") {
    //Cuando el tiempo se acaba.
    console.log("se ha acabado el tiempo.")
  }
  else if(type == "error") {
    //Cuando ocurre un error.
    console.log("ah ocurrido un error.")
  }
})

}
module.exports.help = {
  name:"pacman"
}