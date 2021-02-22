const Discord = require("discord.js");
const db = require("megadb");
const canal_mod = new db.crearDB("canales_mods");
const emoji = require("../emojis.json");

module.exports.run = async (bot, message, args) => {
  
message.delete();
  
let usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!usuario) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** Menciona a un usuario.`);
if(message.author.id === usuario.id) return message.channel.send(emoji.incorrecto + ` **${message.author.username},** No puedes banearte a ti mismo.`);

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);
        
let razon = args.slice(1).join(' '); if(!razon) razon = "Razón no proporcionada.";
    
        
      
if (!message.guild.member(usuario).bannable) return message.channel.send('No puedo banear al usuario.').then(m => m.delete(4000))
        
       
message.guild.member(usuario).ban(razon);
message.channel.send(`${emoji.correcto} Usuario baneado.\n\n- El usuario **${usuario.user.tag}** ha sido baneado exitosamente del servidor!`);
let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
let canal = message.guild.channels.get(c);
        
const embed = new Discord.MessageEmbed()
.setTitle("<:banhammer:558845332956512257> Usuario Baneado")
.setColor("#ff0000")
.addField("﹥Usuario:", `${usuario.user.tag}, con la ID: ${usuario.id}`)
.addField("﹥Baneado por:", `${message.author.tag}`)
.addField("﹥Razón:", `${razon}`)
.setFooter("Baneo Exitoso") 
.setTimestamp()
    
canal.send({embed});
  
}
module.exports.help = {
  name: "ban",
  aliases: ["b", "banear"]
}