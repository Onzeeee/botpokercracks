module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "))
}

module.exports.help = {
    name: "say",
    alias: ['repeat', 'rep'],
    category: 'autres',
    description: "Répète le message d'un utilisateur",
    cooldown: 10,
    usage: '<votre_message>',
    args: true
}