const readline = require("./node_modules/readline-sync");

let carros = [];

let i = 1;
while (i == !0) {
  let nomeCarro = readline.question(" Digite o nome do carro : ");
  let marcaCarro = readline.question(" Digite a marca do carro : ");
  let anoCarro = readline.question(" Digite o ano do carro : ");

  let carro = {
    nome: nomeCarro,
    marca: marcaCarro,
    ano: anoCarro,
  };

  carros.push(carro);

  i = readline.questionInt(" Digite 1 - para continuar cadastrando: ");
}

// Adiciona o carro ao array

// Exibe os carros cadastrados

console.log("Carros cadastrados:");
console.log("")
console.log("")
for (let i = 0; i < carros.length; i++) {
  console.log(
    `Nome: ${carros[i].nome}, Marca: ${carros[i].marca}, Ano: ${carros[i].ano}`
  );
}
