const Discord = require("discord.js");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {

   
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

   
    if (!role) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** menciona algún rol.`)
let roles = {
      "true": "Sí.",
      "false": "No.",
};

   
    const embed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('• Miembros:', role.members.size, true)
        .addField('• Hex color:', role.hexColor, true)
        .addField('• Fecha de creación:', role.createdAt.toDateString(), true)
        .addField('• Editable:', `${roles[role.editable.toString()]}`, true)
        .addField('• ID:', role.id, true);
    return message.channel.send({
        embed: embed
    });
}
module.exports.help = {
  name: "roleinfo",
  aliases: []
}