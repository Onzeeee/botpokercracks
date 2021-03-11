const fs = require("fs")
const bdPkm = require(`../../assets/bd/pokemon.json`)
const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    var res = 0
    var res2 = 0
    for(var i = 0; i < bdUti[message.author.id].pokedex.length; i++){
        if(bdUti[message.author.id].pokedex[i][1] > 1){
            var nbr = bdUti[message.author.id].pokedex[i][1] - 1
            if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 1){
                nbr = nbr * 0.5
            }
            else if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 2){
                nbr = nbr * 0.5
            }
            else if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 3){
                nbr = nbr * 2
            }
            else if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 4){
                nbr = nbr * 4
            }
            else if(bdPkm[bdUti[message.author.id].pokedex[i][0]].rarete == 5){
                nbr = nbr * 40
            }
            bdUti[message.author.id].pokedex[i][1] = 1
            bdUti[message.author.id].tirage = bdUti[message.author.id].tirage + nbr
            res = res + nbr
            res2 = res2 + 1
        }
    }
    var pkmM = ""
    if(res2 > 1){
        if(res > 0.5){
         	pkmM += "Vous avez envoyé "+res2+" pokémons au professeur Chen, il vous donne donc "+res+" tirages en plus\n"
        }
        else{
            pkmM += "Vous avez envoyé "+res2+" pokémons au professeur Chen, il vous donne donc "+res+" tirage en plus\n"
        }
    }
    else{
        if(res > 0.5){
         	pkmM += "Vous avez envoyé "+res2+" pokémon au professeur Chen, il vous donne donc "+res+" tirages en plus\n"
        }
        else{
            pkmM += "Vous avez envoyé "+res2+" pokémon au professeur Chen, il vous donne donc "+res+" tirage en plus\n"
        }
    }
    if(bdUti[message.author.id].tirage > 1){
        pkmM += "Vous avez donc "+bdUti[message.author.id].tirage+" tirages restants"
    }
    else{
        pkmM += "Vous avez donc "+bdUti[message.author.id].tirage+" tirage restant"
    }
    message.channel.send(pkmM)
    fs.writeFile(`bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
        if(err) console.log(err)
    })
}

module.exports.help = {
    name: "autorelease",
    alias: ['autorelease', 'arl'],
    category: 'pokemon',
    description: "Relâche automatiquement tous les pokémons que vous avez en double",
    cooldown: 2,
    usage: '',
    args: false
}