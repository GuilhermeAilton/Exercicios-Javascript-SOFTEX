

;

const readline = require('readline-sync');
let organizacaoAmbieltal = []

let opcao = 1;
while (opcao !== 0) {
  console.log("")
  console.log('=== Menu ===');
  console.log('1. Adicionar organizacao');
  console.log('2. Listar organizacao');
  console.log('3. Atualizar organizacao');
  console.log('4. Deletar organizacao');
  console.log('0. Sair');
  console.log("")
  // Inicializar o objeto cadastro com nome e array vazio para atividades
   opcao = readline.questionInt(": ")
  console.log("")

  let cadastro = {
    nome: '',
    atividades: [],
    escolas: []
  };

  if(opcao == 1){
      // Solicitar e armazenar o nome da organização ambiental
          cadastro.nome = readline.question("Digite o nome da organizacao ambiental: ");
          console.log('');

          let cadastroAtividades = 1;
          while (cadastroAtividades !== 0) {
            console.log("")
            console.log("CADASTRE AS ATIVIDADES DA ORGANIZAÇÃO");
            console.log('');

            // Solicitar e armazenar cada atividade da organização
            let atividade = readline.question("Cadastrar uma atividade da organização: ");
            cadastro.atividades.push(atividade);

            console.log('');
            console.log("Para cadastrar mais atividades, digite: 1");
            console.log("Para sair do cadastro, digite: 0");
            console.log('');

            // Solicitar ao usuário se deseja continuar cadastrando atividades ou sair
            cadastroAtividades = readline.questionInt('Escolha uma opção: ');
          }

          let cadastroEscolasorg = 1;
          while (cadastroEscolasorg !== 0) {
            console.log("")
            console.log("--- CADASTRE AS ESCOLAS VINCULADA A ORGANIZACAO :  ");
            console.log('');

            const cadastroEscolas = {
              nome : '',
              cidade: ''
            }

            // Solicitar e armazenar cada o nome e cidade  da escola
            cadastroEscolas.nome = readline.question("Nome da escola: ");
            cadastroEscolas.cidade = readline.question("Cidade: ");
            cadastro.escolas.push(cadastroEscolas)
            
           

            console.log('');
            console.log("Para cadastrar mais escolas, digite: 1");
            console.log("Para sair do cadastro, digite: 0");
            console.log('');

            // Solicitar ao usuário se deseja continuar cadastrando atividades ou sair
            cadastroEscolasorg = readline.questionInt('Escolha uma opção: ');
          }


          organizacaoAmbieltal.push(cadastro)

}





  }



  // let escolas = readline.question(" Cadastrar as escolas : ");

  // let cadastro = {
  //   nome: organizacaoAmbieltal,
  //   atividades: [],
  //   // escolas: [],
  // };

//   i = readline.questionInt(" Digite 1 - para continuar cadastrando: ");
// }

// // Adiciona o carro ao array

// // Exibe os carros cadastrados

// console.log("Carros cadastrados:");
// console.log("")
// console.log("")
// // for (let i = 0; i < organizacaoAmbieltal.length; i++) {
// //   console.log(
// //     `Nome: ${organizacaoAmbieltal[i].nome}, Marca: ${organizacaoAmbieltal[i].atividades}, Ano: ${organizacaoAmbieltal[i].escolas}`

// //   );

// //   console.log("")
// }

console.log(organizacaoAmbieltal)
