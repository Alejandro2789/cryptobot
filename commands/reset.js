const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if (message.author.id !== "401083681923661825") return;
  
    console.log(`El sistema ha sido forzado a detenerse. By ${message.author.tag}`)
    message.react("✅")

      setTimeout(function () {bot.destroy()
        process.exit()}, 2000)

}
module.exports.help = {
  name: "reset",
  aliases: []
}