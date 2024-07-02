const readline = require('readline-sync')
//pacote para adionar cores ao terminal
const chalk = require('chalk')
let listaDeTarefas = [];

let entrada = 1;
while (entrada != 5) {
  console.log('')
  console.log(chalk.bgGreen("=====  MENU ====="));
  console.log("");

  console.log("1 - Cadastrar Tarefa");
  console.log("2 - Alterar uma tarefa ");
  console.log("3 - Excluir uma tarefa");
  console.log("4 - Listar tarefas ");
  console.log("5 - Sair do sistema");
  console.log("");

  let opcao = readline.questionInt("ESCOLHA UMA OPCAO : ");

  console.log("");
  console.log("");

  if (opcao == 1) {
    let adicionarTarefa = readline.question( " Insira uma tarefa  :  "  );
    //Verficando se dado invalido
    while (adicionarTarefa.trim() === '') {
      console.log('')
      console.log('')
      console.log('******************');
      console.info(chalk.yellow('Tarefa inválida'));
      console.log('******************');
      console.log('')
      adicionarTarefa = readline.question("Insira uma tarefa :  ");
    }
    //adicionado a tarefa na lista com metodo PUSH
    listaDeTarefas.push(adicionarTarefa)
    console.log('')
    console.log('')
    console.log(chalk.green('==================='));
    console.log(chalk.green('Tarefa cadastrada com sucesso'));
    console.log(chalk.green('==================='));
    console.log('')

    let novaTarefa= true

    while(novaTarefa == true) {
      console.log("");
      console.log("1 - Cadastrar outra Tarefa");
      console.log("2 - Voltar para o menu");
      console.log('')
      novaTarefa = readline.questionInt("Escolha uma das opcao : ")
      if(novaTarefa==1) {
        let adicionarTarefa = readline.question( " Insira uma tarefa  :  "  );
        //Verficando se dado invalido
        while (adicionarTarefa.trim() === '') {
          console.log('')
          console.log('')
          console.log('******************');
          console.info(chalk.yellow('Tarefa inválida'));
          console.log('******************');
          console.log('')
          adicionarTarefa = readline.question("Insira uma tarefa :  ");
        }
        //adicionado a tarefa na lista com metodo PUSH
        listaDeTarefas.push(adicionarTarefa)
        console.log('')
        console.log('')
        console.log(chalk.green('==============================='));
        console.log(chalk.green('Tarefa cadastrada com sucesso'));
        console.log(chalk.green('=============================='));
        console.log('')

      }else{
        novaTarefa = false
      }
    }

  } 
  else if (opcao == 2) {
        // Verifica se a lista de tarefas está vazia
        if (listaDeTarefas.length == 0){
          console.log(chalk.bgYellowBright('A lista de Tarefas está vazia '))
          console.log('')
          console.log(chalk.bgYellowBright('Cadastre uma nova tarefa '))
          console.log("")

        }else{
              // EXIBE A LISTA DE TAREFAS 
              cont = 1
              console.log('=========== Lista de Tarefas =========== ')
              for(i=0; i < listaDeTarefas.length; i++) {
              
                console.log('')
                console.log(chalk.green(`${cont} - ${listaDeTarefas[i]}`))
                cont +=1
                console.log("----------------------------------------");
               
              }
              console.log('')
              // REQUER A ENTRADA DO DADO DO USUÁRIO PARA ESCOLHER A TAREFA DE ACORDO COM NÚMERO
              let alterarTarefa = readline.question( "Digite o numero da tarefa que deseja alterá-la :  "  );
              var index = listaDeTarefas.indexOf(alterarTarefa);
              index+=1
              if (index > -1) {
                listaDeTarefas[index] = readline.question('Descreva a nova tarefa : ')
                console.log('')
                console.log(chalk.greenBright('********* Tarefa Alterada com sucesso *********** '))
    
              }
              
        }
 
  } 
  
  else if (opcao == 3) {
    cont = 1
    console.log('=========== Lista de Tarefas =========== ')
    for(i=0; i < listaDeTarefas.length; i++) {
    
      console.log('')
      console.log(chalk.green(`${cont} - ${listaDeTarefas[i]}`))
      cont +=1
      console.log("----------------------------------------");
     
    }
    console.log('')
    // REQUER A ENTRADA DO DADO DO USUÁRIO PARA ESCOLHER A TAREFA DE ACORDO COM NÚMERO
    let alterarTarefa = readline.question( "Digite o numero da tarefa que deseja apagar :  "  );
    var index = listaDeTarefas.indexOf(alterarTarefa);
    index+=1
    if (index > -1) {
      listaDeTarefas.splice(index,1)
      console.log('')
      console.log(chalk.bgRed('********* Tarefa exluida com sucesso *********** '))

    }
    
  }
  else if (opcao == 4){

    if (listaDeTarefas.length == 0){
      console.log(chalk.bgYellowBright('NÃO HÁ TAREFAS NA LISTA PARA SEREM EXIBIDAS '))
      console.log('')

    }else{
          // EXIBE A LISTA DE TAREFAS 
          cont = 1
          console.log('=========== Lista de Tarefas =========== ')
          for(i=0; i < listaDeTarefas.length; i++) {
          
            console.log('')
            console.log(chalk.green(`${cont} - ${listaDeTarefas[i]}`))
            cont +=1
            console.log("----------------------------------------");
          } 
     }
}
  else if (opcao == 5) {
    entrada = 5

  }
}
console.log("--------- VOCÊ SAIU DO SISTEMA ----------------");
