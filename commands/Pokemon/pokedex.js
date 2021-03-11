const { MessageEmbed } = require("discord.js")
const bdPkm = require(`../../assets/bd/pokemon.json`)
const bdUti = require(`../../assets/bd/utilisateur.json`)

function pokemonPokedex(idP, nombre){
    var liste = []
    if(nombre+10 > bdUti[idP].pokedex.length){
        for(var i = nombre;  i < bdUti[idP].pokedex.length; i++){
            if(bdUti[idP].pokedex[i][1] > 1){
                liste += `${bdPkm[bdUti[idP].pokedex[i][0]].emoji} ${bdUti[idP].pokedex[i][0]} **x${bdUti[idP].pokedex[i][1]}**\n`
            }
            else{
                liste += `${bdPkm[bdUti[idP].pokedex[i][0]].emoji} ${bdUti[idP].pokedex[i][0]}\n`
            }
        }
    }
    else{
        for(var i = 0;  i < 10; i++){
            if(bdUti[idP].pokedex[i+nombre][1] > 1){
                liste += `${bdPkm[bdUti[idP].pokedex[i+nombre][0]].emoji} ${bdUti[idP].pokedex[i+nombre][0]} **x${bdUti[idP].pokedex[i+nombre][1]}**\n`
            }
            else{
                liste += `${bdPkm[bdUti[idP].pokedex[i+nombre][0]].emoji} ${bdUti[idP].pokedex[i+nombre][0]}\n`
            }
        }
    }
    return liste
}

module.exports.run = (client, message, args) => {
    var nbrEmoji = 0
    var nbrPoke = bdUti[message.author.id].pokedex.length 
    var nbrPoke2 = bdUti[message.author.id].pokedex.length % 10
    var nbrPages = nbrPoke - nbrPoke2
    nbrPages = nbrPages / 10
    nbrPages = nbrPages + 1
    let embed = new MessageEmbed()
    .attachFiles(['assets/img/pokedex.png'])
    .setThumbnail("attachment://pokedex.png")
    .setColor("#ff0000")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setFooter("1 / "+nbrPages+" pages")
    .setDescription(pokemonPokedex(message.author.id, 0));
    message.channel.send(embed).then(sentMessage => {
        sentMessage.react("👈")
        sentMessage.react("👉")
        sentMessage.react("❌")
        client.on('messageReactionAdd', (reaction, user) => {
            if (reaction.emoji.name === "👉" && nbrEmoji+10 < bdUti[message.author.id].pokedex.length && user.id !== client.user.id) {
                nbrEmoji += 10
                let embed1 = new MessageEmbed()
                .attachFiles(['img/pokedex.png'])
                .setThumbnail("attachment://pokedex.png")
                .setColor("#ff0000")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter(""+(nbrEmoji / 10 + 1)+" / "+nbrPages+" pages")
                .setDescription(pokemonPokedex(message.author.id,nbrEmoji));
                sentMessage.edit(embed1)
                sentMessage.reactions.resolve("👉").users.remove(message.author.id)
            }
            if (reaction.emoji.name === "👈" && nbrEmoji > 9 && user.id !== client.user.id) {
                nbrEmoji = nbrEmoji - 10
                let embed1 = new MessageEmbed()
                .attachFiles(['img/pokedex.png'])
                .setThumbnail("attachment://pokedex.png")
                .setColor("#ff0000")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter(""+(nbrEmoji / 10 + 1)+" / "+nbrPages+" pages")
                .setDescription(pokemonPokedex(message.author.id,nbrEmoji));
                sentMessage.edit(embed1)
                sentMessage.reactions.resolve("👈").users.remove(message.author.id)
            }
            if(reaction.emoji.name === '❌' && user.id !== client.user.id){
                sentMessage.delete()
            }
        })
    })
}

module.exports.help = {
    name: "pokedex",
    alias: ['pokedex'],
    category: 'pokemon',
    description: "Affiche le pokédex de l'utilisateur",
    cooldown: 10,
    usage: '',
    args: false
}