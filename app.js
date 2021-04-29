const fs = require('fs')
const { default: validator } = require('validator')

fs.writeFileSync('lol.txt','LÖL')

fs.appendFileSync('lol.txt','Hello ')



const utils = require('./utils.js')


console.log(utils.name)

console.log(utils.add(4,2))

require('validator')

console.log(validator.isEmail('asds@ge.com'))

console.log(validator.isURL('lol.txt'))