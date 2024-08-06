import * as readline  from 'readline-sync'
let cont: number = 1;
let nota1: number;
let nota2: number;

while (cont <= 3) {
    console.log(`Aluno  -${cont}`)
    nota1 = readline.questionFloat("Digite a primeira nota: ");
    nota2 = readline.questionFloat("Digite a segunda nota: ");
    calcularMedia(nota1,nota2)

    cont++; 
}



function calcularMedia(nota1: number, nota2: number): void {
    let resultado: number = (nota1 + nota2) / 2;

    

    if (resultado == 10) {
        console.log('Aprovado com Distinção');
    } else if (resultado >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}



