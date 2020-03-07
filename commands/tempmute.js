const Discord = require("discord.js");
const db = require("megadb");
const rolemute = new db.crearDB("rolemute");
const canal_mod = new db.crearDB("canales_mods");
const ms = require("ms");
const emoji = require("../emojis.json");
module.exports.run = async (bot, message, args) => {
message.delete();
  
if(!rolemute.tiene(message.guild.id)) return message.channel.send("El servidor no cuenta con el rol de usuarios silenciados, añadalo con el comando `rolemute` y vuelva a intentar.")
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrecto + ` **${message.author.username}** No tengo los permisos suficientes para ejecutar esta acción.`);
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(emoji.incorrectoGif + ` **${message.author.username}** No tienes los permisos necesarios para ejecutar este comando.`);

let roleemute = rolemute.tiene(message.guild.id) ? await rolemute.obtener(message.guild.id) : "Sin rol.";
  
if(!roleemute){
    try{
      roleemute = await message.guild.createRole({
        name: "🔇 | Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(roleemute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
}

let razón = args.slice(2).join(' ');
if(!razón) return message.channel.send("<:incorrecto:558845297447403558> Error!\n**Uso:** `<prefix>tempmute <@Usuario> <Tiempo> <Razón>`")
  
let tiempo = args[1];
if(tiempo === "10h") return message.channel.send("El tiempo máximo para mutear es de **9 horas.**");
  
let usuario = message.mentions.members.first() || bot.users.get(args[0]);

  

  


message.channel.send(`<:correcto:558845268800307229> Listo! El usuario ${usuario} ha sido silenciado por **${tiempo}**; ${razón}`)
usuario.addRole(roleemute)
setTimeout(function(){
  message.channel.send(`<:correcto:558845268800307229> ${message.author} el usuario ${usuario.user.tag} ha sido desmuteado correctamente.`)
  usuario.removeRole(roleemute)
}, ms(tiempo));
  

  let c = canal_mod.tiene(message.guild.id) ? await canal_mod.obtener(message.guild.id) : message.channel.id;
  let canal = message.guild.channels.get(c)
        
    const embed = new Discord.RichEmbed()
    .setTitle("🔇 Usuario Silenciado")
    .setColor("#ff0000")
    .addField("﹥Usuario:", `${usuario}, con la ID: ${usuario.id}`)
    .addField("﹥Silenciado por:", `${message.author}`)
    .addField("﹥Tiempo:", `${tiempo}`)
    .addField("﹥Razón:", `${razón}`).setTimestamp()
    
     canal.send({embed});
  
}
module.exports.help = {
  name: "tempmute",
  aliases: []
}
