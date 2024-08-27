interface IProdutoInterface{
    nome:string
    preco:number
    descricao?:string
    quantidadeEmEstoque:boolean


}

class Produto implements IProdutoInterface {
    nome:string
    preco:number
    descricao?:string
    quantidadeEmEstoque:boolean

    constructor(nome:string, preco:number, quantidadeEmEstoque:boolean,descricao?:string){
        this.nome = nome
        this.preco= preco
        this.descricao = descricao
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    exibirInfo():void{
        console.log(`Nome do Produto : ${this.nome} `)
        console.log(`Preço do Produto : ${this.preco} `)
        console.log(`Descrição do Produto: ${this.descricao ? this.descricao : 'Não disponível'}`);
        console.log(`Quantidade dos Produto : ${this.quantidadeEmEstoque} `)
        

    }
}


let produto = new Produto ('Mouse', 30,true,'Equipamento Eletrônico')

produto.exibirInfo()