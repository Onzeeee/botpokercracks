const { Client, Collection } = require('discord.js')
const { TOKEN } = require('./config')
const fs = require("fs")
const bdUti = require(`./assets/bd/utilisateur.json`)
const bdMar = require(`./assets/bd/marchand.json`)

const client = new Client()
const collections = ["commands", "cooldowns"]
collections.forEach(x => client[x] = new Collection())

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