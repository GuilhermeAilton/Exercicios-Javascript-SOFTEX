const  readlineSync = require('readline-sync')





console.log('1 - Standard ')
console.log('2 - Luxo ')
console.log('3 - Suíte ')

let quarto = readlineSync.questionInt('Qual o tipo de quarto  : ')
console.log('')
let diaria = readlineSync.questionInt('Quantidade de diarias : ')
console.log('')





if (quarto == 1) {
   let resultado = 150 * diaria
   console.log(`O valor da estadia quarto Standard - R$ ${resultado.toFixed(2)}`)


}
else if(quarto == 2) {
    let resultado = 300 * diaria
    console.log(`O valor da estadia do quarto Luxo - R$ ${resultado.toFixed(2)}`)
}

else if(quarto == 3 ) {
    let resultado = 500 * diaria
    console.log(`O valor da estadia do quarto Suíte - R$ ${resultado.toFixed(2)}`)
}



