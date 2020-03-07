const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  
   
 /*
 const quiz = [
    { q: "✎ ¿De que color es el cielo?", a: ["blanco" , "azul"] },
    { q: "✎ Nombra una marca de refrescos.", a: ["Pepsi" , "Coca" , "Rc" , "7up" , "Sprite" , "Florida ice"] }, 
    { q: "✎ Nombra un lenguaje de programación.", a: ["actionscript" , "coffeescript" , "c" , "c++" , "basic" , "python" , "perl" , "javascript" , "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] }, 
    { q: "✎ ¿Quien es mi creador?", a: ["Alejandro", "Alejandro#8187"] }, 
    { q: "✎ ¿En que lenguaje de programación estoy hecho?", a: ["Javascript",] }, 
    { q: "✎ Nombra el séptimo planeta desde el Sol..", a: ["Urano"] },
    { q: "✎ Nombre de la isla mas grande del mundo.", a: ["Greenland",] }, 
    { q: "✎ ¿Cuál es el río más largo del mundo?", a: ["Amazonas", "Rio Amazonas"] },
    { q: "✎ Nombre el océano más grande del mundo.", a: ["Pacifico", "Océano Pacífico"] }, 
    { q: "✎ Nombre de uno de los 3 colores primarios.", a: ["Azul", "Rojo", "Amarilo"] }, 
   
    { q: "✎ ¿Cuantos colores contiene el arcoiris?", a: ["7", "Siete"] },
    { q: "✎ ¿Cómo se llama un lapso de tiempo de mil años?", a: ["Milenio"] },
    { q: "✎ ¿Cuántos cuadrados hay en un tablero de ajedrez?", a: ["64", "Sesenta y cuatro"] }, 
    { q: "✎ ¿Cuántos grados se encuentran en un círculo?", a: ["360", "360 grados", "Trescientos sesenta"] }, 
    { q: "✎ ¿El sistema decimal de Dewey se utiliza para categorizar qué?", a: ["Libros"] },
    { q: "✎ ¿Cuántos puntos tiene una brújula?", a: ["32", "Treinta y dos"] },
    { q: "✎ ¿Cuántas cuerdas tiene un chelo?", a: ["4", "Cuatro"] },
    { q: "✎ ¿Cuántas sinfonías compuso Beethoven?", a: ["9", "Nueve"] },
    { q: "✎ ¿Cuántas líneas debe tener un limerick?", a: ["5", "Cinco"] },
    { q: "✎ ¿Cuál es el lenguaje más básico de Microsoft?", a: ["Visual Basic"] }, 
    { q: "✎ ¿Cual es el lenguaje mas complicado?", a: ["Binario"] },
    { q: "✎ **¿'OS'**, abreviatura de computadora usualmente significa?", a: ["Sistema operativo"] } 
];
const options = {
  max: 1,
  time: 10000,
  errors: ["time"],
};

  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Ganador: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Respuesta Correcta: \`${winnerMessage.content}\``)
                                 .setFooter(`Pregunta: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('¡Nadie consiguió la respuesta a tiempo!')
                                 .setTitle(`Respuestas correctas: \`${item.a}\``)
                                 .setFooter(`Pregunta: ${item.q}`)
                                })
  };*/
}
module.exports.help = {
  name: "quiz",
  aliases: []
}