const readline = require('readline-sync')


//Usuario inserir o numero total de eleitores 
let numeroTotalDeEleitores =  readline.questionInt('Digite o numero total de eleitores : ')
console.log("")
i = 1;
//Criando as variaveis para ser acessada globalmente 
let votosMario= 0
let votosJose =0
let votosTiago = 0
// Enquanto i for menor ou igual ao numero total de eleitores
while(i <= numeroTotalDeEleitores) {
    
    console.log('CANDIDATOS')
    console.log('')
    console.log('1 - Mario ')
    console.log('2 - Jose')
    console.log('3 - Tiago')
    console.log('')
    console.log('Escolha uma das opções :')
    console.log('')
//Usuario vota de acordo  com numero do canditato
    let voto = readline.questionInt(`${i} - CANDIDATO A VOTAR ( Digite o numero do candidato que deseja votar ):  `)
    i++
// se o voto for 1  a variavel votosMario vai receber + 1 de incremento
    if (voto == 1) {
        votosMario= votosMario + 1
// se o voto for 2  a variavel votosJose vai receber + 1 de incremento        
    }else if(voto==2){
        votosJose = votosJose + 1
// se o voto for 3  a variavel votosTiago vai receber + 1 de incremento             
    }else if (voto==3) {
        votosTiago = votosTiago + 1
    }
}

// Usamos o console.log para exibir as variaveis 
console.log("")
console.log('Número total de votos de Mario : ' + votosMario)
console.log('Número total de votos de Jose : ' + votosJose)
console.log('Número total de votos de Tiago : ' + votosTiago)