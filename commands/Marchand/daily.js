const fs = require("fs")
const bdMar = require(`../../assets/bd/marchand.json`)
const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    if(bdMar["daily"].utilisateur.length == 0){
        bdUti[message.author.id].argent += 20
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
        bdMar["daily"].utilisateur.push(message.author.id)
        fs.writeFile(`./assets/bd/marchand.json`, JSON.stringify(bdMar), err =>{
            if(err) console.log(err)
        })
        message.channel.send("Votre compte a été crédité de 20<:pokedollars:793418322737102859> !")
    }
    else{
        for(var i = 0; i < bdMar["daily"].utilisateur.length; i++){
            if(bdMar["daily"].utilisateur[i] == message.author.id){
                message.channel.send("Vous avez déjà recupéré votre argent journalier")
            }
            else{
                bdUti[message.author.id].argent += 20
                fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                    if(err) console.log(err)
                })
                bdMar["daily"].utilisateur.push(message.author.id)
                fs.writeFile(`./assets/bd/marchand.json`, JSON.stringify(bdMar), err =>{
                    if(err) console.log(err)
                })
                message.channel.send("Votre compte a été crédité de 20<:pokedollars:793418322737102859> !")
            }
        }
    }
}
module.exports.help = {
    name: "daily",
    alias: ['daily'],
    category: 'marchand',
    description: "Permet de gagner 20 pokédollars par jour",
    cooldown: 1,
    usage: '',
    args: false
}