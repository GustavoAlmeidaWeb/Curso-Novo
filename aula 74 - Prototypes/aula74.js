// Construtora -> Molde (Classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância
const pessoa1 = new Pessoa('Gustavo', 'Almeida');
const pessoa2 = new Pessoa('Ana Paula', 'Grando');

console.dir(pessoa1);
console.dir(pessoa2);