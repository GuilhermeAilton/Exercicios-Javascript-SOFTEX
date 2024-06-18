var readlineSync = require('readline-sync');

let nota1 = readlineSync.questionFloat('Digite a 1º nota ')
let nota2 = readlineSync.questionFloat('Digite a 2º nota ')
let nota3 = readlineSync.questionFloat('Digite a 3º nota ')
let nota4 = readlineSync.questionFloat('Digite a 4º nota ')


media= (nota1 + nota2 + nota3 + nota4)/4


console.log(`A média : ${media}`)