const  readlineSync = require('readline-sync')

console.log('1 - Standard ')
console.log('2 - Luxo ')
console.log('3 - Suíte ')
console.log('')
let quarto = readlineSync.questionInt('Qual o tipo de quarto  : ')
console.log('')
let diaria = readlineSync.questionInt('Quantidade de dias : ')
console.log('')


function escolhaQuarto(){
    if (quarto == 1) {
        quarto = 150 
     }
     else if(quarto == 2) {
         quarto = 300 
     }  
     else if(quarto == 3 ) {
         quarto = 500 
     }
}


function calcularEstadia(quarto,diaria) {
    let resultado = quarto * diaria
    console.log(`O valor total da estadia : ${resultado}`)


}


escolhaQuarto(quarto)
calcularEstadia(quarto,diaria)