"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var verificarNumero;
verificarNumero = readline.questionInt("Digite um número: ");
function VerificarSinal(num) {
    if (num < 0) {
        return 'Negativo';
    }
    else {
        return 'Positivo';
    }
}
if (verificarNumero !== undefined) {
    console.log(VerificarSinal(verificarNumero));
}
