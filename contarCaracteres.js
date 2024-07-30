"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var palavra = readline.question("Digite uma Palavra : ");
function contarCarecter(text) {
    return text.length;
}
var totalCarcter = contarCarecter(palavra);
console.log(totalCarcter);
