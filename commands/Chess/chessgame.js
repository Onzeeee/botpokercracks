module.exports.run = (client, message, args) => {
    message.channel.send('Test de changement')
}

module.exports.help = {
    name: "chessgame",
    alias: ['chessgame', 'cg'],
    category: 'chess',
    description: "Démarre une partie de jeu d'échec",
    cooldown: 10,
    usage: '',
    args: false
}