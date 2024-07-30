
import * as readline from 'readline-sync';

let palavra = readline.question("Digite uma Palavra : ") 

function contarCarecter(text: string) :number {
    return text.length
}
const totalCarcter:number = contarCarecter(palavra);

console.log(totalCarcter)