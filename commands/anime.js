const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const db = require("megadb");
const idioma = new db.crearDB("lenguaje");
module.exports.run = async (bot, message, args) => {


    const search = `${args}`;
    if(!search) return message.channel.send("Ingrese el nombre del anime a buscar.")

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`Resultados sobre ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('> Titulo en Inglés', data.englishTitle, true)
      .addField('> Título en Japones', data.japaneseTitle, true)
      .addField('> Tipo', data.type, true)
      .addField('> Episodios', data.episodes, true)
      .addField('> Rating', data.rating, true)
      .addField('> Lanzado', data.aired, true)
      .addField('> Puntuación', data.score, true)
      .addField('> Estadísticas de puntuación', data.scoreStats, true)
      .addField('> Link', data.url);

      message.channel.send(malEmbed);
    })

}
module.exports.help = {
  name: "anime",
  aliases: []
}