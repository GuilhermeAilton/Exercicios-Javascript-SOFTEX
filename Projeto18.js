
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
        console.log(chalk.green('==============================='));
        console.log(chalk.green('Organização cadastrada com sucesso'));
        console.log(chalk.green('=============================='));
        console.log('')


}

else if (opcao ==  2){
      let cont = 1 
        console.log('============================ ');
        console.log('Lista das Organizções ');
        console.log('============================ '); 
        console.log("")
    function listarOrg(organizacaoAmbiental){

        organizacaoAmbiental.forEach(org => {
          console.log(`${cont} - Nome da Organização : ${org.nome}`)
          console.log(`Atividades : ${org.atividades}`)
            org.escolas.forEach(escolas => {
              console.log(`Escola : ${escolas.nome} Cidade: ${escolas.cidade}`)
           
              cont++
            })
            console.log("")
        });
      
    }
    listarOrg(organizacaoAmbiental)


}

else if (opcao == 3 ) {
      if (organizacaoAmbiental.length == 0) {
        console.log('============================ ');
        console.log('Lista organização está vazia ');
        console.log('============================ ');
    } else {
        console.log('---- SELECIONE A ORGANIZAÇÃO PARA ATUALIZAR : ----- ');
             listarOrg(organizacaoAmbiental)
                
    }

                   
 }


 else if(opcao == 4) {



 }

 else if (opcao == 0) {
  opcao = 0

 }
  

}

console.log("---- Você Encerrou o Programa ----")



