var readlineSync = require('readline-sync');


let imovelTipo = readlineSync.question('Indique se é uma casa ou apartamneto : ')
let imovelArea = readlineSync.questionFloat("Informe a área de metros quadrados (m²)  :  ")
let imovelValorMetrosQuadrado = readlineSync.questionFloat("Valor do metro quadrado : ")

let valorImovel = imovelArea * imovelValorMetrosQuadrado



console.log('==== Valor do Aluguel ==== ')
console.log(`${imovelTipo1} - Área: ${imovelArea} m² - Valor do aluguel: R$ ${valorImovel.toFixed(2)} `)


