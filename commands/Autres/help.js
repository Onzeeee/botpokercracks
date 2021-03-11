const { MessageEmbed } = require("discord.js")
const { PREFIX } = require("../../config")
const { readdirSync } = require("fs")
const categoryList = readdirSync('./commands')

module.exports.run = (client, message, args) => {
    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#36363f")
            .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leurs commandes\nPour plus d'informations sur une commande \`${PREFIX}help <command_name>\``)
        for (const category of categoryList) {
            embed.addField(
                `${category}`,
                `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            )
        }
        return message.channel.send(embed)
    }else{
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.alias && cmd.help.alias.includes(args[0]))

        const embed = new MessageEmbed()
            .setColor("#36363f")
            .setTitle(`\`${command.help.name}\``)
            .addField("Descritption", `${command.help.description} (cd : ${command.help.cooldown} seconde(s))`)
            .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

        if (command.help.alias.length > 1) embed.addField("Alias", `${PREFIX}${command.help.alias.join(`, ${PREFIX}`)}`, true)
        
        return message.channel.send(embed)
    }
}

module.exports.help = {
    name: "help",
    alias: ['help'],
    category: 'autres',
    description: "Renvoie une liste de commandes ou les informations sur une seule",
    cooldown: 4,
    usage: '<command_name>',
    args: false
}