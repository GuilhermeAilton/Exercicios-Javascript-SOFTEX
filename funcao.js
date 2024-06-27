

// function  meuNome() {
//     console.log('Guilherme')
// }

// meuNome()


const readline = require ('./node_modules/readline-sync')

// let num1 = readline.questionFloat('Digite o primeiro numero : ')
// let num2 = readline.questionFloat('Digite o segundo numero : ')

// console.log('')


function soma(num1, num2) {
    let resultado = num1 + num2
    console.log(`O resultado da soma : ${resultado}`)
  
  
}


// function subtracao(num1, num2) {
//     let resultado = num1 - num2
//     console.log(`O resultado da subracao : ${resultado}`)
    
// }


// function divisao(num1, num2) {
//     let resultado = num1 / num2
//     console.log(`O resultado da divisao : ${resultado}`)
    
// }

// function multiplicao(num1, num2) {
//     let resultado = num1 * num2
//     console.log(`O resultado da multiplicao : ${resultado}`)
    
// }



// soma(num1,num2)
// console.log("")
// subtracao(num1,num2)
// console.log("")
// divisao(num1,num2)
// console.log("")
// multiplicao(num1,num2)




// LOOP PARA PROGRAMA DE OPERAÇÕES
let i = 1 ;

while(i == 1 ) {
    let num1 = readline.questionFloat('Digite o primeiro numero : ')
    let num2 = readline.questionFloat('Digite o segundo numero : ')
    soma(num1,num2)

    i = readline.questionInt('Digite 1 para continuar \n -- 2 para sair  :')

}
console.log('-------- Fim do programa ---------');
