module.exports.run = (client, message, args) => {
    message.channel.send("Test numéro 2 de la commande");
}

module.exports.help = {
    name: "test",
    alias: ['test'],
    category: 'autres',
    description: "Fonction test, change tout le temps",
    cooldown: 1,
    usage: '',
    args: false
}