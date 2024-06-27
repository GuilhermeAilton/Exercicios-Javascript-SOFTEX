

// function  meuNome() {
//     console.log('Guilherme')
// }

// meuNome()


const readline = require ('./node_modules/readline-sync')

let num1 = readline.questionFloat('Digite o primeiro numero : ')
let num2 = readline.questionFloat('Digite o segundo numero : ')

console.log('')


function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado
    
}


function subtracao(num1, num2) {
    let resultado = num1 - num2
    return resultado
    
}


function divisao(num1, num2) {
    let resultado = num1 / num2
    return resultado.toFixed(2)
    
}

function multiplicao(num1, num2) {
    let resultado = num1 * num2
    return resultado
    
}



console.log(`O resultado da soma : ${soma(num1,num2)}`)
console.log("")
console.log(`O resultado da subtracao : ${subtracao(num1,num2)}`)
console.log("")
console.log(`O resultado da divisão : ${divisao(num1,num2)}`)
console.log("")
console.log(`O resultado da multiplicao : ${multiplicao(num1,num2)}`)


