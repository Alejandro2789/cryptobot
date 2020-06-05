const Discord = require("discord.js");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {

if (message.author.id !== "401083681923661825") return;
  
  if(!args || args.length < 1) return message.reply(emoji.incorrecto + ` **${message.author.username}**Ingresa el comando a reiniciar.`);
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!bot.commands.has(commandName)) {
    return message.reply(emoji.incorrecto + " Ese comando no existe!");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  bot.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  bot.commands.set(commandName, props);
  message.reply(`${emoji.correcto} El comando **${commandName}** se ha reiniciado correctamente.`);


}
module.exports.help = {
  name: "reset-command",
  aliases: []
}
