"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var num1 = readline.questionInt('Digite o primeiro numero : ');
var num2 = readline.questionInt('Digite o segundo numero : ');
function soma(a, b) {
    return a + b;
}
var resultado = soma(num1, num2);
console.log('Soma do resulrado : ' + resultado);
