
const readline = require('readline-sync');
//pacote para adionar cores ao terminal
const chalk = require('chalk')
let organizacaoAmbiental = []

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

  
function listarOrg(organizacaoAmbiental) {
  let cont = 1;
    organizacaoAmbiental.forEach(org => {
        console.log(`${cont} - Nome da Organização : ${org.nome}`);
        console.log(`Atividades : ${org.atividades}`);
        org.escolas.forEach(escola => {
            cont++;
            console.log(`Escola : ${escola.nome}\n Cidade: ${escola.cidade}`);
            console.log("----------------------------------------");
        });
        console.log("");
    });
}

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


          organizacaoAmbiental.push(cadastro)

        console.log('')
        console.log(chalk.green('=================================='));
        console.log(chalk.green('Organização cadastrada com sucesso'));
        console.log(chalk.green('=================================='));
        console.log('')


}

else if (opcao == 2) {

  console.log('============================ ');
  console.log('Lista das Organizações ');
  console.log('============================ ');
  console.log("");


}



else if (opcao == 3) {
  if (organizacaoAmbiental.length == 0) {
      console.log('============================ ');
      console.log('Lista organização está vazia ');
      console.log('============================ ');
  } else {
      console.log('---- SELECIONE A ORGANIZAÇÃO PARA ATUALIZAR : ----- ');
      console.log()
      listarOrg(organizacaoAmbiental);
      console.log('')
      let atualizar = readline.questionInt('SELECIONE A ORGANIZACAO QUE DEJESA ALTERAR : ')
      console.log("")
      let index = atualizar - 1

      if (index >= 0 && index < organizacaoAmbiental.length) {
        organizacaoAmbiental[index].nome = readline.question('Descreva o nome da nova organizacao: ');
        console.log('');
        console.log(chalk.greenBright('********* Organização Alterada com sucesso ***********'));
      } else {
        console.log(chalk.red('Número da tarefa inválido!'));
      }


  }
}



 else if(opcao == 4) {

    console.log('=========== Lista de Tarefas =========== ')
    console.log("")
    listarOrg(organizacaoAmbiental);
    
    
    console.log('')
    // REQUER A ENTRADA DO DADO DO USUÁRIO PARA ESCOLHER A TAREFA DE ACORDO COM NÚMERO
    let apagarOrg = readline.questionInt( "Digite o numero da organizacao que deseja apagar :  "  );
    let index= apagarOrg -1
    if (index > -1) {
      organizacaoAmbiental.splice(index,1)
      console.log('')
      console.log(chalk.bgRed('********* Tarefa exluida com sucesso *********** '))

  }
}


 

 else if (opcao == 0) {
  opcao = 0

 }
  

}

console.log("---- Você Encerrou o Programa ----")


