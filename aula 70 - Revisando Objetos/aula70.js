const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Almeida',
    idade: 33,
};
const chave = 'nome';
// console.log(pessoa[chave], pessoa['sobrenome']);
// //
// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)

const pessoa1 = new Object();
pessoa1.nome = 'Ana Paula';
pessoa1.sobrenome = 'Grando';
pessoa1.idade = 25;
pessoa1.falarNome = function(){
    return(`${this.nome} está falando seu nome.`)
};
pessoa1.dtNascimento = function(){
    const dtAtual = new Date();
    return dtAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.falarNome());
// console.log(pessoa1.dtNascimento());
for(let chave in pessoa1){
    console.log(pessoa1[chave])
}

// Factory functions  / Classes
function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`  
        }
    };
}
const p1 = criaPessoa('Gustavo','Almeida');
console.log(p1.nomeCompleto);


// Constructor Functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Não permite que o objeto seja alterado
    Object.freeze(this);
}

// {} <- this
const p2 = new Pessoa('Gustavo','Almeida');
// serve pra travar o objeto e não permitir alterações
Object.freeze(p2); 
const p3 = new Pessoa('Ana Paula','Grando');
console.log(p2);
console.log(p3);