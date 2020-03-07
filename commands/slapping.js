const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first();  
    let kill = ["http://pa1.narvii.com/6125/119e195782c9cfcaf14866f4c4c7f8f658d78aa9_00.gif",
                  "http://pa1.narvii.com/6147/fcd4f645f669d236c9636eb3662137ad5550f66d_00.gif",
                  "http://pa1.narvii.com/6332/d7b7ac7219466e9c70b6e895f9dd3191c84bb3c1_00.gif"]
              
           
if(!user) return message.channel.send('Menciona a un usuario.');
      if(message.author.id === user.id) return message.channel.send("No te hagas daño, menciona a otro usuario.");
    var embed = new Discord.RichEmbed()
  //.setAuthor(message.author.username, message.author.avatarURL)
  .setColor(3447003)
  .setDescription('**'+ message.author.username +' abofeteó a '+ user.username +'**')

  .setImage(kill[Math.floor(Math.random() * kill.length)])
        message.channel.send({embed});

}
module.exports.help = {
  name: "slapping",
  aliases: []
}