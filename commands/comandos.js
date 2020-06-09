const Discord = require("discord.js");
const emoji = require("..emojis.json");

module.exports.run = async (bot, message, args) => {
  const comandos = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setDescription(
      `A continuación te presento la lista de comandos, si tienes alguna duda puedes unirte al servidor de [soporte](https://discord.gg/B3eTuYv).`
    )
    .addField(
      "🤖 | Crypto Commands:",
      "`comandos` - `setprefix` - `error` - `invite` - `permisos` - `stats`"
    )
    .addField(
      "⚒ | Moderación:",
      "`ban` - `hackban` - `unban` - `kick` - `clear` - `warn` - `see_warns` - `unwarn` - `mute` - `unmute` - `tempmute`"
    )
    .addField(
      "👥 | Social:",
      "`profile` - `rep` - `daily` - `marry` - `divorce` - `set_description` - `background` - `reputaciones` - `balance` - `inventario` - `top`"
    )
    .addField(
      "🎮 | Juegos:",
      "`mine` - `fish` - `apostar` - `slots`"
    )
    .addField("💰 | Economía:", "`shop` - `buy` - `sell` - `transfer`")
    .addField(
      "🔧 | Configuración:",
      "`mod-channel` - `suggestions` - `logs` - `settings` - `reply` - `reports` - `rolemute` - `autorole` - `config`"
    )
    .addField(
      "🖼 | Imágenes:",
      "`basura` - `bob` - `coche` - `drake` - `rainbow` - `susto` - `trump` - `wasted` - `avatar` - `icon_server` - `dog` - `cat` - `meme` - `loli`"
    )
    .addField(
      "💡 | Utilidad:",
      "`remover` - `addrole` - `encuesta` - `roleinfo` - `canales` - `serverinfo` - `user` - `miembros` - `emojis` - `google` - `roles` -  `emoji` - `create-emoji` - `suggestion` - `deny` - `accept` - `embed` - `report` - `anuncio`"
    )
    .addField(
      "⭐ | Diversión:",
      "`ppt` - `8ball` - `reverse` - `say` - `numero` - `rmember` - `amor` - `bminas`"
    )
    .addField(
      "🙊 | Acciones:",
      "`kiss` - `punch` - `hug` - `lick` - `suicide` - `happy` - `dance` - `cry` - `kill` - `bite` - `confused` - `slapping`"
    )
  message.channel.send(comandos);
};
module.exports.help = {
  name: "comandos",
  aliases: ["commands", "menu"]
};
