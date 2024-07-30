class Cliente {
    id: number;
    nome: string;
    genero: string;
    email: string
    constructor(id:number , nome:string, genero:string, email:string) {
        this.id = id
        this.nome= nome
        this.genero= genero
        this.email = email
    }
}


const cliente1 = new Cliente (1,'Guilherme','M','guilherme@exemplo')

console.log(cliente1.nome);