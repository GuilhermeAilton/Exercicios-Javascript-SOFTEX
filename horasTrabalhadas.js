var readlineSync = require('readline-sync');


let ganhoPorhora = readlineSync.questionFloat('Digite quanto você ganha por hora : ')
let hora = readlineSync.questionFloat('Digite quantas horas você trabalhou : ')


let total = hora * ganhoPorhora


console.log(`O meu total de ganho : R$ ${total.toFixed(2)}`)