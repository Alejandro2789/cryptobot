const Discord = require("discord.js");
const db = require("megadb");
let creditos_profile = new db.crearDB("cantidad_creditos");

module.exports.run = async (bot, message, args) => {
  
  
let credits = creditos_profile.tiene(message.author.id) ? await creditos_profile.obtener(message.author.id) : "$0";
  
  
  
  
   let pages = [`**Usa las reacciones para ver los items en venta, las reacciones expiran en 1m.\n:ticket:**Compra.**     :tickets:**Venta.**\nTu balance es: ${credits} créditos.**\n\n:ring: __Anillo__\n:ticket: $1000     :tickets: $400` , `**Usa las reacciones para ver los items en venta, las reacciones expiran en 1m.\n:ticket:**Compra.**     :tickets:**Venta.**\nTu balance es: ${credits}**\n\n:fishing_pole_and_fish: __Caña de pescar__\n:ticket: $200     :tickets: $50\n\n:pick: __Pico__\n :ticket: $400     :tickets: $150\n\n:cookie: __Galleta__\n :ticket: $100     :tickets: $25\n\n:radio: __Radio__\n :ticket: $900     :tickets: $500` , `**Usa las reacciones para ver los items en venta, las reacciones expiran en 1m.\n:ticket:**Compra.**\nTu balance es: ${credits} créditos.**\n\n<:booster:720047742071865486> __Booster Juegos__\n:ticket: $4600     :tickets: :x:`];
   let page = 1;
  
  const embed = new Discord.RichEmbed()
  .setColor(0xffffff)
  .setTitle("• Shop")
  .setFooter(`${message.author.username} | Página ${page} de ${pages.length}.`)
  .setDescription(pages[page-1])
  
   message.channel.send(embed).then(msg => {
      msg.react('⏪').then(r => {
      msg.react('⏩')
       
      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
      
      const backwards = msg.createReactionCollector(backwardsFilter, {time: 60000});
      const forwards = msg.createReactionCollector(forwardsFilter, {time: 60000});

      
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`${message.author.username} | Página ${page} de ${pages.length}.`)
        msg.edit(embed)
      })
      forwards.on('collect', r => {
       if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`${message.author.username} | Página ${page} de ${pages.length}.`); 
        msg.edit(embed) 
      })
    })
  })
   

}
module.exports.help = {
  name: "shop",
  aliases: ["tienda"]
}