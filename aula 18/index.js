const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Almeida',
    idade: 33,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e diz Oi`)
    }
}

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }

}

const pessoa = criaPessoa('Gustavo', 'Almeida', 33)
console.log(pessoa.nome)

pessoa1.fala()