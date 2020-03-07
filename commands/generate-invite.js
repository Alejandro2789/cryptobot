const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

   
var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0       
    
}).then(invite =>  
    message.channel.send(`Invitación de este servidor:\n${invite.url}`)
);
  
}
module.exports.help = {
  name: "generate-invite",
  aliases: []
}