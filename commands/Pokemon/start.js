const fs = require("fs")
const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    if(bdUti[message.author.id] != null){
        message.channel.send("Vous avez déja un compte ^^")
    }else{
        bdUti["nbrPokedex"].nombre = bdUti["nbrPokedex"].nombre + 1
        bdUti[message.author.id] = {
            "argent": 0,
            "objets": [],
            "pokedex": [],
            "tirage": 1
        }
        bdUti["nomUti"].utilisateur.push(message.author.id)
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
        message.channel.send(`Vous venez de vous inscrire en tant que dresseur !\nLe professeur Chen vous a donné le pokedex numéro : ${bdUti["nbrPokedex"].nombre}`)
    }
}

module.exports.help = {
    name: "start",
    alias: ['start'],
    category: 'pokemon',
    description: "Démarre l'aventure d'un utilisateur et lui permet de chasser des pokémons",
    cooldown: 2,
    usage: '',
    args: false
}