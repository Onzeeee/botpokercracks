const { MessageEmbed } = require("discord.js")
const bdObj = require(`../../assets/bd/objets.json`)
const bdMar = require(`../../assets/bd/marchand.json`)

function objetsListe(){
    var listesObjM = bdMar["marchand"].objetsAuj
    var messageF = ""
    for(var i = 0; i < listesObjM.length; i++){
        messageF = `${messageF}${bdObj[listesObjM[i]].nom} coûte **${bdObj[listesObjM[i]].prixA}**<:pokedollars:793418322737102859>\n`
    }
    return messageF
}


module.exports.run = (client, message, args) => {
    var dateN = new Date()
    dateN = 24 - dateN.getHours()
    let embed = new MessageEmbed()
    .setTitle("Marchand")
    .setThumbnail()
    .setDescription(objetsListe())
    .setFooter(`Prochains objets disponibles dans ${dateN} heures`);
    message.channel.send(embed)
}

module.exports.help = {
    name: "marchand",
    alias: ['marchand', 'm'],
    category: 'marchand',
    description: "Affiche ce que le marchand vends",
    cooldown: 1,
    usage: '',
    args: false
}