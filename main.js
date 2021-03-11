const { Client, Collection } = require('discord.js')
const { TOKEN } = require('./config')
const fs = require("fs")
const bdUti = require(`./assets/bd/utilisateur.json`)
const bdMar = require(`./assets/bd/marchand.json`)

const client = new Client()
const collections = ["commands", "cooldowns"]
collections.forEach(x => client[x] = new Collection())


function demarrageTirage(){
    var intervalId = setInterval(donnerTirage, 60000)
}
function donnerTirage(){
    var dday = new Date()
    var ddaym = dday.getMinutes()
    var ddayh = dday.getHours()
    if(ddaym > 0){
        for(var i = 0; i < bdUti["nbrPokedex"].nombre;i++){
            if(bdUti[bdUti["nomUti"].utilisateur[i]].tirage < 1){
                bdUti[bdUti["nomUti"].utilisateur[i]].tirage = bdUti[bdUti["nomUti"].utilisateur[i]].tirage + 1
            }
        }
        fs.writeFile(`./assets/bd/utilisateur.json`, JSON.stringify(bdUti), err =>{
            if(err) console.log(err)
        })
    }
    if(ddayh == 24 || ddayh == 0){
        bdMar["daily"].utilisateur = []
        fs.writeFile(`./assets/bd/marchand.json`, JSON.stringify(bdMar), err =>{
            if(err) console.log(err)
        })
        bdMar["marchand"].objetsAuj = []
    }
}

demarrageTirage()

const loadCommands = (dir = "./commands") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"))

        for (const file of commands){
            const getFileName = require(`${dir}/${dirs}/${file}`)
            client.commands.set(getFileName.help.name, getFileName)
            console.log(`Commande chargée: ${getFileName.help.name}`)
        }
    })
}

const loadEvents = (dir = "./events/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"))

        for (const event of events){
            const evt = require(`${dir}/${dirs}/${event}`)
            const evtName = event.split(".")[0]
            client.on(evtName, evt.bind(null, client))
            console.log(`Evenements chargé : ${evtName}`)
        }
    })
}

loadCommands();
loadEvents();

client.login(process.env.TOKEN);