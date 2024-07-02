let lista = [];

i = 1;
while (i != 0) {
  console.log("");
  console.log("");

  console.log("1 - ADCIONAR ");
  console.log("2 - REMOVER ");
  console.log("3 - LISTAR ");
  console.log("0 - SAIR ");
  console.log("");
  console.log("");

  let opcao = readline.questionInt("ESCOLHA UMA OPCAO : ");

  console.log("");
  console.log("");

  if (opcao == 1) {
    let adcionarNumero = readline.questionInt(
      "digite o numero para inserir na lista :  "
    );
    lista.push(adcionarNumero);
  } else if (opcao == 2) {
    let removerNumero = readline.questionInt(
      "digite o numero para remover da lista :  "
    );
    var index = lista.indexOf(removerNumero);
    if (index > -1) {
      lista.splice(index, 1);
    }
    console.log(`Numero removido:  ${removerNumero}`);
  } else if (opcao == 3) {
    if (lista.length == 0 || "") {
      console.log("Não ha dados na lista");
    } else {
      console.log(lista);
    }
  }
}
console.log("--------- FIM DO PROGRAMA ----------------");
