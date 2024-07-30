import * as readline from 'readline-sync';

let verificarNumero: number | undefined;

verificarNumero = readline.questionInt("Digite um número: ");

function VerificarSinal(num: number): string {
    if (num < 0) {
        return 'Negativo';
    } else {
        return 'Positivo';
    }
}

 console.log(VerificarSinal(verificarNumero));


