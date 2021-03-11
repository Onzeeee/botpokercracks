const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    message.channel.send(`Vous avez actuellement ${bdUti[message.author.id].argent} <:pokedollars:793418322737102859>`)
}
module.exports.help = {
    name: "portefeuille",
    alias: ['portefeuille','pf'],
    category: 'marchand',
    description: "Permet de connaitre le montant de votre portefeuille",
    cooldown: 1,
    usage: '',
    args: false
}