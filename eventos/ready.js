const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = (client) => {
  
  
  const actividad = [
   `Gracias por el apoyo! <3`,
    `${bot.guilds.size} servidores! <3`,
    `${bot.users.size} usuarios!`,
    `@Crypto`,
    `Ganador: Ayz_Jean 🎉`
  ];

  console.log(
    `Estoy listo!, conectado en ${bot.guilds.size} servidores y  ${bot.users.size} usuarios.`
  );
  setInterval(() => {
    const index = Math.floor(Math.random() * (actividad.length - 1) + 1);

    bot.user.setPresence({
      status: "online",
      game: {
        name: actividad[index],
        type: "WATCHING"
      }
    });
  }, 10000);
 
  
}
