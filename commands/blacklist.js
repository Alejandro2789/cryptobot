const Discord = require("discord.js");
const db = require("megadb");
const blacklist = new db.crearDB("blacklist");
const emoji = require("../emojis.json");
exports.run = async(client, message, args, prefix, command) => {
  
if (message.author.id !== "401083681923661825") return;

let razón = args.slice(1).join(" ");
let user_id = client.users.find(x => x.username === args[0]) || message.mentions.members.first() || client.users.get(args[0]);
  
if(!user_id) return message.channel.send(`${emoji.incorrecto} **${message.author.username}** no pude encontrar al usuario **${args[0]}**!`);
  
const filter = m => m.author.id === message.author.id;
  
message.channel.send(`${emoji.error} El usuario encontrado fue: **${user_id.tag}.**\n¿Es este tú usuario?`).then(x => x.delete(10000));
  
message.channel.awaitMessages(filter,{
max: 1,
time: 10000
}).then(collected => {
  
if(collected.first().content.toLowerCase() === "si"){
      
message.channel.send(emoji.correcto + ` **${message.author.username}** el usuario **${user_id.tag}** acaba de ser añadido a la blacklist del bot. Razón: **${razón}**`);
    
let blackEmbed = new Discord.RichEmbed()
.setTitle("**:warning: Nuevo usuario en la lista negra del bot.**")
.addBlankField(true)
.addField("**- Datos:**", `**Usuario:**\n${user_id.tag}(**${user_id.id}**)\n\n**Razón:**\n${razón}`)

message.channel.send(blackEmbed);
client.channels.get("592408829858283607").send(blackEmbed);
      
blacklist.establecer(user_id.id, razón);    
  
}else if(collected.first().content.toLowerCase() === "no"){
      
message.channel.send(emoji.correcto + ` **${message.author.username}**, Esta bien, cerrando menú!`);

}else if(collected.first().content.toLowerCase() === "cancel"){
      
message.channel.send(emoji.correcto + " Cerrando menú!").then(x => x.delete(10000));
    
    }
  })

  
};
exports.help = {
  name: 'blacklist',
  aliases: [""]
};