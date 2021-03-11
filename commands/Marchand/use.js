const bdObj = require(`../../assets/bd/objets.json`)
const bdMar = require(`../../assets/bd/marchand.json`)

module.exports.run = (client, message, args) => {
    message.channel.send("En cours de création...")
}

module.exports.help = {
    name: "use",
    alias: ['use'],
    category: 'marchand',
    description: "Permet d'utilisé un objet qui a une utilité",
    cooldown: 1,
    usage: '<nom_de_l_objet>',
    args: true
}