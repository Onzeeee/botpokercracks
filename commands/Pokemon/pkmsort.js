const fs = require("fs")
const { PREFIX } = require("../../config")
const bdPkm = require(`../../assets/bd/pokemon.json`)
const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    var argument = message.content.replace(`${PREFIX}pkmsort`, '').replace(' ','')
    if(argument == "rare"){
        var listeF = []
        for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 5){
                listeF.push(bdUti[message.author.id].pokedex[i])
            }
        }
        for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 4){
                listeF.push(bdUti[message.author.id].pokedex[i])
            }
        }
        for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 3){
                listeF.push(bdUti[message.author.id].pokedex[i])
            }
        }
        for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 2){
                listeF.push(bdUti[message.author.id].pokedex[i])
            }
        }
        for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 1){
                listeF.push(bdUti[message.author.id].pokedex[i])
            }
        }
        bdUti[message.author.id].pokedex = listeF
        message.channel.send("Ton pokedex est trié par rareté")
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
    }
    else if(argument == "abc"){
        var liste = []
        var liste2 = []
        for(var i = 0;i < bdUti[message.author.id].pokedex.length; i++){
            liste.push(bdUti[message.author.id].pokedex[i][0])
        }
        liste.sort()
        for(var j = 0; j < liste.length; j++){
            for(var i = 0; i < liste.length ; i++){
                if(bdUti[message.author.id].pokedex[i][0] == liste[j]){
                    liste2.push(bdUti[message.author.id].pokedex[i])
                }
            }
        }
        bdUti[message.author.id].pokedex = liste2
        message.channel.send("Ton pokedex est trié par ordre alphabétique")
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
    }
    else{
        message.reply("Veuillez spécifier une bonne donnée de triage")
    }
}

module.exports.help = {
    name: "pkmsort",
    alias: ['pkmsort'],
    category: 'pokemon',
    description: "Trie le pokedex par la catégorie mise après la commande",
    cooldown: 5,
    usage: '<abc_ou_rare>',
    args: true
}