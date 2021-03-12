module.exports.run = (client, message, args) => {
    message.channel.send("Pong !")
}

module.exports.help = {
    name: "test",
    alias: ['test'],
    category: 'autres',
    description: "Renvoi pong!",
    cooldown: 10,
    usage: '',
    args: false
}