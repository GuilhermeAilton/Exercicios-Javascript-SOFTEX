interface IFuncionarioInterface {
    nome: string
    cargo:string
    salario:number
    horasTrabalhadas:number

}


class Funcionario implements IFuncionarioInterface {
     nome: string
    cargo:string
    salario:number
    horasTrabalhadas:number
    funcionarios:Funcionario[]

    constructor(nome:string , cargo:string, salario:number, horasTrabalhadas:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
        this.horasTrabalhadas = horasTrabalhadas
    }

    calcularPagamento(): number{
        return this.salario * this.horasTrabalhadas

    }

    cadastrarFun(funcionario:Funcionario):void{
       this.funcionarios.push(funcionario)
       console.log("Funcionario Cadastrado com sucesso")

    }


}


let func = new Funcionario('Guilherme', 'DEV' , 1400, 30)

func.cadastrarFun(func)

