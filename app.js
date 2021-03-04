const fs = require('fs')

fs.writeFileSync('lol.txt','LÖL')

fs.appendFileSync('lol.txt','Hello ')



const utils = require('./utils.js')


console.log(utils.name)

console.log(utils.add(4,2))
