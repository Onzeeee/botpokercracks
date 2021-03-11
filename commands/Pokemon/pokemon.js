const fs = require("fs")
const bdPkm = require(`../../assets/bd/pokemon.json`)
const bdUti = require(`../../assets/bd/utilisateur.json`)

module.exports.run = (client, message, args) => {
    var verifieU = false
    var verifieT = false
    if(bdUti[message.author.id] != null){
        verifieU = true
        if(bdUti[message.author.id].tirage >= 1){
            verifieT = true
        }
    }
    if(verifieU && verifieT){
        var pkm1 = false
        var pkm2 = false
        var pkm3 = false
        var pkm4 = false
        var pkm5 = false
        var pkm21 = false
        var pkm22 = false
        var pkm23 = false
        var pkm24 = false
        var pkm25 = false
        var rand = Math.floor(Math.random() * Math.floor(bdPkm[1].pokemon.length))
        var rand1 = Math.floor(Math.random() * Math.floor(bdPkm[1].pokemon.length))
        var rand2 = Math.floor(Math.random() * Math.floor(bdPkm[1].pokemon.length))
        var rand3 = Math.floor(Math.random() * Math.floor(10))
        var pkm1N = bdPkm[1].pokemon[rand]
        var pkm1E = bdPkm[pkm1N].emoji
        var pkm1A = ""
        if(rand3 < 9){
            pkm1A = `${pkm1E} ${pkm1E} ${pkm1E} 🔔`
            pkm1 = true
            var pkm = [pkm1N,1]
            if(bdUti[message.author.id].pokedex.length == 0){
                pkm21 = true
                bdUti[message.author.id].pokedex.push(pkm)
            }
            else{
                var existe = false
                for(var i = 0; i< bdUti[message.author.id].pokedex.length; i++){
                    if(bdUti[message.author.id].pokedex[i][0] == pkm1N){
                        bdUti[message.author.id].pokedex[i][1] = bdUti[message.author.id].pokedex[i][1] + 1
                        existe = true
                    }
                }
                if(!existe){
                    pkm21 = true
                    bdUti[message.author.id].pokedex.push(pkm)
                }
            }
            fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                if(err) console.log(err)
            })
        }else{
            pkm1A = `${pkm1E} ${bdPkm[bdPkm[1].pokemon[rand1]].emoji} ${bdPkm[bdPkm[1].pokemon[rand2]].emoji} ❌`
        }
        var rand = Math.floor(Math.random() * Math.floor(bdPkm[2].pokemon.length))
        var rand1 = Math.floor(Math.random() * Math.floor(bdPkm[2].pokemon.length))
        var rand2 = Math.floor(Math.random() * Math.floor(bdPkm[2].pokemon.length))
        var rand3 = Math.floor(Math.random() * Math.floor(5))
        var pkm2N = bdPkm[2].pokemon[rand]
        var pkm2E = bdPkm[pkm2N].emoji
        var pkm2A = ""
        if(rand3 < 2){
            pkm2A = `${pkm2E} ${pkm2E} ${pkm2E} 🔔`
            pkm2 = true
            var pkm = [pkm2N,1]
            if(bdUti[message.author.id].pokedex.length == 0){
                pkm22 = true
                bdUti[message.author.id].pokedex.push(pkm)
            }
            else{
                var existe = false
                for(var i = 0; i< bdUti[message.author.id].pokedex.length; i++){
                    if(bdUti[message.author.id].pokedex[i][0] == pkm2N){
                        bdUti[message.author.id].pokedex[i][1] = bdUti[message.author.id].pokedex[i][1] + 1
                        existe = true
                    }
                }
                if(!existe){
                    pkm22 = true
                    bdUti[message.author.id].pokedex.push(pkm)
                }
            }
            fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                if(err) console.log(err)
            })
        }else{
            pkm2A = `${pkm2E} ${bdPkm[bdPkm[2].pokemon[rand1]].emoji} ${bdPkm[bdPkm[2].pokemon[rand2]].emoji} ❌`
        }
        var rand = Math.floor(Math.random() * Math.floor(bdPkm[3].pokemon.length))
        var rand1 = Math.floor(Math.random() * Math.floor(bdPkm[3].pokemon.length))
        var rand2 = Math.floor(Math.random() * Math.floor(bdPkm[3].pokemon.length))
        var rand3 = Math.floor(Math.random() * Math.floor(5))
        var pkm3N = bdPkm[3].pokemon[rand]
        var pkm3E = bdPkm[pkm3N].emoji
        var pkm3A = ""
        if(rand3 < 1){
            pkm3A = `${pkm3E} ${pkm3E} ${pkm3E} 🔔`
            pkm3 = true
            var pkm = [pkm3N,1]
            if(bdUti[message.author.id].pokedex.length == 0){
                pkm23 = true
                bdUti[message.author.id].pokedex.push(pkm)
            }
            else{
                var existe = false
                for(var i = 0; i< bdUti[message.author.id].pokedex.length; i++){
                    if(bdUti[message.author.id].pokedex[i][0] == pkm3N){
                        bdUti[message.author.id].pokedex[i][1] = bdUti[message.author.id].pokedex[i][1] + 1
                        existe = true
                    }
                }
                if(!existe){
                    pkm23 = true
                    bdUti[message.author.id].pokedex.push(pkm)
                }
            }
            fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                if(err) console.log(err)
            })
        }else{
            pkm3A = `${pkm3E} ${bdPkm[bdPkm[3].pokemon[rand1]].emoji} ${bdPkm[bdPkm[3].pokemon[rand2]].emoji} ❌`
        }
        var rand = Math.floor(Math.random() * Math.floor(bdPkm[4].pokemon.length))
        var rand1 = Math.floor(Math.random() * Math.floor(bdPkm[4].pokemon.length))
        var rand2 = Math.floor(Math.random() * Math.floor(bdPkm[4].pokemon.length))
        var rand3 = Math.floor(Math.random() * Math.floor(20))
        var pkm4N = bdPkm[4].pokemon[rand]
        var pkm4E = bdPkm[pkm4N].emoji
        var pkm4A = ""
        if(rand3 < 1){
            pkm4A = `${pkm4E} ${pkm4E} ${pkm4E} 🔔`
            pkm4 = true
            var pkm = [pkm4N,1]
            if(bdUti[message.author.id].pokedex.length == 0){
                pkm24 = true
                bdUti[message.author.id].pokedex.push(pkm)
            }
            else{
                var existe = false
                for(var i = 0; i< bdUti[message.author.id].pokedex.length; i++){
                    if(bdUti[message.author.id].pokedex[i][0] == pkm4N){
                        bdUti[message.author.id].pokedex[i][1] = bdUti[message.author.id].pokedex[i][1] + 1
                        existe = true
                    }
                }
                if(!existe){
                    pkm24 = true
                    bdUti[message.author.id].pokedex.push(pkm)
                }
            }
            fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                if(err) console.log(err)
            })
        }else{
            pkm4A = `${pkm4E} ${bdPkm[bdPkm[4].pokemon[rand1]].emoji} ${bdPkm[bdPkm[4].pokemon[rand2]].emoji} ❌`
        }
        var rand = Math.floor(Math.random() * Math.floor(bdPkm[5].pokemon.length))
        var rand1 = Math.floor(Math.random() * Math.floor(bdPkm[5].pokemon.length))
        var rand2 = Math.floor(Math.random() * Math.floor(bdPkm[5].pokemon.length))
        var rand3 = Math.floor(Math.random() * Math.floor(100))
        var pkm5N = bdPkm[5].pokemon[rand]
        var pkm5E = bdPkm[pkm5N].emoji
        var pkm5A = ""
        if(rand3 < 1){
            pkm5A = `${pkm4E} ${pkm4E} ${pkm4E} 🔔`
            pkm5 = true
            var pkm = [pkm5N,1]
            if(bdUti[message.author.id].pokedex.length == 0){
                pkm25 = true
                bdUti[message.author.id].pokedex.push(pkm)
            }
            else{
                var existe = false
                for(var i = 0; i< bdUti[message.author.id].pokedex.length; i++){
                    if(bdUti[message.author.id].pokedex[i][0] == pkm5N){
                        bdUti[message.author.id].pokedex[i][1] = bdUti[message.author.id].pokedex[i][1] + 1
                        existe = true
                    }
                }
                if(!existe){
                    pkm25 = true
                    bdUti[message.author.id].pokedex.push(pkm)
                }
            }
            fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
                if(err) console.log(err)
            })
        }else{
            pkm5A = `${pkm5E} ${bdPkm[bdPkm[5].pokemon[rand1]].emoji} ${bdPkm[bdPkm[5].pokemon[rand2]].emoji} ❌`
        }
        message.channel.send(`${pkm1A}\n${pkm2A}\n${pkm3A}\n${pkm4A}\n${pkm5A}`)
        var pkmA = `${message.member} `
        if(!pkm1 && !pkm2 && !pkm3 && !pkm4 && !pkm5){
            pkmA +=  "Vous avez rien obtenu"
        }
        if(pkm1){
            if(pkm21){
                pkmA += `Vous avez obtenu : <:newpoke:785455634329894932> ${pkm1E} ${pkm1N}\n`
            }
            else{
                pkmA += `Vous avez obtenu : ${pkm1E} ${pkm1N}\n`
            }
        }
        if(pkm2){
            if(pkm22){
                pkmA += `Vous avez obtenu un peu-commun : <:newpoke:785455634329894932> ${pkm2E} ${pkm2N}\n`
            }
            else{
                pkmA += `Vous avez obtenu un peu-commun : ${pkm2E} ${pkm2N}\n`
            }
        }
        if(pkm3){
            if(pkm23){
                pkmA += `Vous avez obtenu un rare : <:newpoke:785455634329894932> ${pkm3E} ${pkm3N}\n`
            }
            else{
                pkmA += `Vous avez obtenu un rare : ${pkm3E} ${pkm3N}\n`
            }
        }
        if(pkm4){
            if(pkm24){
                pkmA += `Vous avez obtenu un super-rare : <:newpoke:785455634329894932> ${pkm4E} ${pkm4N}\n`
            }
            else{
                pkmA += `Vous avez obtenu un super-rare : ${pkm4E} ${pkm4N}\n`
            }
        }
        if(pkm5){
            if(pkm25){
                pkmA += `Vous avez obtenu un légendaire : <:newpoke:785455634329894932> ${pkm5E} ${pkm5N}\n`
            }
            else{
                pkmA += `Vous avez obtenu un légendaire : ${pkm5E} ${pkm5N}\n`
            }
        }
        message.channel.send(pkmA)
        bdUti[message.author.id].tirage = bdUti[message.author.id].tirage - 1 
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
    }
    else if(!verifieU){
        message.channel.send("Veuilez vous créer un compte via la commande !start")
    }
    else if(!verifieT){
        var dday = new Date();
        var ddaym = dday.getMinutes()
        if(ddaym < 30){
            mrestant = 30 - ddaym
        }else{
            mrestant = 60 - ddaym
        }
        message.channel.send(`Vous n'avez plus de chasse disponible\nVeuillez attendre : **${mrestant}** min avant votre prochaine chasse`)
    }
}

module.exports.help = {
    name: "pokemon",
    alias: ['pokemon', 'p'],
    category: 'pokemon',
    description: "Tirage aléatoire de pokémons sur 5 niveaux de rareté\nRareté 1 : **90%**\nRareté 2 : **40%**\nRareté 3 : **20%**\nRareté 4 : **5%**\nRareté 5 : **1%**\n",
    cooldown: 2,
    usage: '',
    args: false
}