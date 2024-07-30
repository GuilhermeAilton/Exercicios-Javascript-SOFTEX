
import * as readline from 'readline-sync';

let num1 = readline.questionInt('Digite o primeiro numero : ')
let num2 = readline.questionInt('Digite o segundo numero : ')


function soma(a: number, b: number): number {
    return a + b;
}
const resultado: number = soma(num1,num2)
console.log('Soma do resulrado : ' + resultado)
