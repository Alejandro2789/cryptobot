const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const Weez = require("weez");
const weez = new Weez.WeezAPI("l0HfMkCdAQTY0e1FwJdv2Ef6XKTNT6rCdX9k");
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");
const channel_logs = new db.crearDB("channel_logs");
const auto = new db.crearDB("autorole");
const blacklist = new db.crearDB("blacklist");

bot.commands = new Discord.Collection();

function T_convertor(ms) {
  let años = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let meses = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let dias = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let horas = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((ms % (1000 * 60)) / 1000);

  let final = "";
  if (años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `;
  if (meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `;

  if (dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `;
  if (horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `;
  if (minutos > 0)
    final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `;
  if (segundos > 0)
    final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`;
  return final;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Command Handler. */

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(`[Línea 64, server.js] - Ha ocurrido un error: ${err}`);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log(`No se ha encontrado la carpeta "commands".`);
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    //console.log(`¡comando ${f} listo!`);
    bot.commands.set(props.help.name, props);
  });
});

/* -------- Bienvenida -------- */
bot.on("guildMemberAdd", async member => {
  if (!auto.tiene(member.guild.id)) return;
  let role_id = await auto.obtener(`${member.guild.id}.autorole`);
  member.addRole(role_id, "Crypto Autorole.");
});

/* -------- Mensaje Eliminado -------- */
bot.on("messageDelete", async message => {
  if (!channel_logs.tiene(`${message.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${message.guild.id}`);
  let canal = message.guild.channels.get(canal_dt);
  if (!canal) return;
  const mdelete = new Discord.RichEmbed()
    .setTitle("• Un mensaje fue eliminado.")
    .addField("◊ Autor:", `${message.author.tag} (\`${message.author.id}\`)`)
    .addField("◊ Contenido:", message)
    .addField("◊ Canal:", `${message.channel} (\`${message.channel.id}\`)`)
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(mdelete);
});

/* -------- Mensaje Editado -------- */
bot.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.id === "495758665391800321") return;
  if (oldMessage.content === newMessage.content) return;
  if (!channel_logs.tiene(`${oldMessage.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${oldMessage.guild.id}`);
  let canal = oldMessage.guild.channels.get(canal_dt);
  if (!canal) return;
  const mdelete = new Discord.RichEmbed()
    .setTitle("• Un mensaje fue editado.")
    .setDescription(
      `[Redirección](https://discordapp.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})`
    )
    .addField(
      "◊ Autor:",
      `${oldMessage.author.tag} (\`${oldMessage.author.id}\`)`
    )
    .addField("◊ Antes:", oldMessage.content)
    .addField("◊ Después:", newMessage.content)
    .addField(
      "◊ Canal:",
      `${oldMessage.channel} (\`${oldMessage.channel.id}\`)`
    )
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(mdelete);
});

/* -------- Rol Creado -------- */
bot.on("roleCreate", async role => {
  if (!channel_logs.tiene(`${role.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${role.guild.id}`);
  let canal = role.guild.channels.get(canal_dt);
  if (!canal) return;

  const embed = new Discord.RichEmbed()
    .setTitle("• Ha sido creado un rol.")
    .addField("◊ Nombre:", role.name)
    .addField("◊ ID:", role.id)
    .addField("◊ Mención:", role)
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(embed);
});

/* -------- Rol Eliminado -------- */
bot.on("roleDelete", async role => {
  if (!channel_logs.tiene(`${role.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${role.guild.id}`);
  let canal = role.guild.channels.get(canal_dt);
  if (!canal) return;

  const embed = new Discord.RichEmbed()
    .setTitle("• Se ha eliminado un rol.")
    .addField("◊ Nombre:", role.name)
    .addField("◊ ID:", role.id)
    .addField("◊ Posición:", role.position)
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(embed);
});

/* -------- Canal Creado -------- */
bot.on("channelCreate", async channel => {
  if (!channel_logs.tiene(`${channel.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${channel.guild.id}`);
  let canal = channel.guild.channels.get(canal_dt);
  if (!canal) return;

  const embed = new Discord.RichEmbed()
    .setTitle("• Un canal ha sido creado.")
    .addField("◊ Nombre:", channel.name)
    .addField("◊ ID:", channel.id)
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(embed);
});

/* -------- Canal Editado -------- */
bot.on("channelUpdate", async (oldChannel, newChannel) => {
  if (!channel_logs.tiene(`${oldChannel.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${oldChannel.guild.id}`);
  let canal = oldChannel.guild.channels.get(canal_dt);
  if (!canal) return;

  oldChannel.guild.fetchAuditLogs().then(logs => {
    let userID = logs.entries.first().executor.id;

    const embed = new Discord.RichEmbed()
      .setTitle("• Un canal fue editado.")
      .addField("◊ Antiguo Nombre:", oldChannel.name)
      .addField("◊ Nuevo Nombre:", newChannel.name)
      .addField("◊ ID:", newChannel.id)
      .addField(
        "◊ Editado por:",
        `${bot.users.get(userID).tag}, **ID:** ${userID}`
      );

    canal.send(embed);
  });
});

/* -------- Canal Eliminado -------- */
bot.on("channelDelete", async channel => {
  if (!channel_logs.tiene(`${channel.guild.id}`)) return;
  let canal_dt = await channel_logs.obtener(`${channel.guild.id}`);
  let canal = channel.guild.channels.get(canal_dt);
  if (!canal) return;

  const embed = new Discord.RichEmbed()
    .setTitle("• Un canal ha sido eliminado.")
    .addField("◊ Nombre:", channel.name)
    .addField("◊ ID:", channel.id)
    .setFooter(new Date().toDateString())
    .setColor("RED");
  canal.send(embed);
});

/* -------- Nuevo Servidor -------- */
bot.on("guildCreate", async servidor => {
  let own = servidor.owner;

  own.send(`:white_check_mark: ¡Gracias por agregarme a ${servidor.name}!\n
•  Mi prefix es \`c!\`
• Puedes ver mi lista de comandos con **c!comandos**
• Menú de ayuda **c!help**\n\n
⁎ Si necesitas ayuda únete al servidor de soporte: (https://discord.gg/WN3TNRs)`);

  let canal = bot.channels.get("531925007136194561");

  const new_guild = new Discord.RichEmbed()
    .setDescription(
      `🔢 Ahora cuento con **${bot.guilds.size}** guilds, y **${bot.users.size}** usuarios.`
    )
    .setAuthor(
      "⏏️ Me han añadido a un nuevo servidor, datos:",
      servidor.iconURL
    )
    .addField("⭐ Nombre:", `◆ ${servidor.name}`)
    .addField("👤 Dueño:", `◆ ${servidor.owner.user.tag}`)
    .addField("👥 Miembros:", `◆ ${servidor.memberCount}`)
    .setColor("#92bbfc");

  canal.send(new_guild);
});

/* -------- Salida De Un Servidor -------- */
bot.on("guildDelete", async servidor => {
  let canal = bot.channels.get("531925007136194561");

  const leave_guild = new Discord.RichEmbed()
    .setDescription(
      `🔢 Ahora cuento con **${bot.guilds.size}** guilds, y **${bot.users.size}** usuarios.`
    )
    .setAuthor("⏏️ Me han expulsado de un servidor, datos:", servidor.iconURL)
    .addField("🌌 Nombre:", `◆ ${servidor.name}`)
    .addField("👤 Dueño:", `◆ ${servidor.owner.user.tag}`)
    .addField("👥 Miembros:", `◆ ${servidor.memberCount}`)
    .setColor("#92bbfc");

  canal.send(leave_guild);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------- Evento Ready -------- */

bot.on("ready", () => {
  const actividad = [
   `Gracias por el apoyo! <3`,
    `${bot.guilds.size} servidores! <3`,
    `${bot.users.size} usuarios!`,
    `@Crypto`];

  console.log(
    `Estoy listo!, conectado en ${bot.guilds.size} servidores y  ${bot.users.size} usuarios.`
  );
  setInterval(() => {
    const index = Math.floor(Math.random() * (actividad.length - 1) + 1);//actividad[index]

    bot.user.setPresence({
      status: "online",
      game: {
        name: actividad[index],
        type: "WATCHING"
      }
    });
  }, 10000);
});


bot.on("message", async message => {
  
  
  
  /* Prefix personalizado. */
  let prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "c!";

  /* Tipos. Argumentos. */
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
if (message.author.bot) return;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* BlackList */

  if (blacklist.tiene(message.author.id)) return;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Cuando envían un mensaje al DM. */

  if (message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Mensaje directo hacia mi!")
      .addField(
        `- Enviado Por:`,
        `${message.author.tag}\n\n- ID: ${message.author.id}`
      )
      .setColor("#B2FFFF")
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`- Mensaje: `, message.content)
      .setFooter(`DM Bot Messages | DM Logs`);

    bot.users.get("401083681923661825").send(embed);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Cuando mencionan al bot. */
  const botMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  if (message.content.match(botMention)) {
    const embed = new Discord.RichEmbed()
      .setColor("#9925e7")
      .addField("**» Prefix:**", `**${prefix}**`)
      .addField("**» Menú de ayuda:**", `**${prefix}help**`)
      .addField("**» Lista de comandos:**", `**${prefix}comandos**`);
    return message.channel.send(embed);
  }
  
  if(!message.content.startsWith(prefix)) return;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Cuando usan un comando. */

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args, prefix);

  if (message.author.id === "401083681923661825") return;

  const canal = bot.channels.get("702573834880155658");

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🔧 | Comando utilizado.")
    .addField(`• **Comando:**`, cmd)
    .addField(
      "• **Usuario:**",
      `${message.author.tag}  ID: ${message.author.id}`
    )
    .addField(
      "• **Servidor:**",
      `${message.guild.name} -- ${message.channel.name}`
    )
    .setFooter("Logs comandos.")
    .setTimestamp();
  canal.send(embed);
});

bot.login(process.env.TOKEN).catch(e => console.log(e));
