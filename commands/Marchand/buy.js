const bdUti = require(`../../assets/bd/utilisateur.json`)
const bdMar = require(`../../assets/bd/marchand.json`)

module.exports.run = (client, message, args) => {
    for(var i = 0; i < bdMar["marchand"].objetsAuj.length(); i++){
        if(args == bdMar["marchand"].objetsAuj[i]){
            
        }
    }
}
module.exports.help = {
    name: "buy",
    alias: ['buy'],
    category: 'marchand',
    description: "Permet d'acheter des objets au marchand",
    cooldown: 1,
    usage: '<nom_de_l_objet>',
    args: true
}