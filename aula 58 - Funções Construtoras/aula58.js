// Função construtora -> objetos
// Função Fábrica -> objetos
// Contrutora -> Pessoa (new)
// Funções construtoras tem por convenção o uso de letra Maiuscula no inicio do nome da função

function Pessoa (nome, sobrenome){
    // Metodos privados
    const ID = 123;
    const metodoInterno = function(){

    };

    // Métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = function (){
        console.log(this.nome + ': Sou um método')
    };
}

const p1 = new Pessoa('Gustavo', 'Valgoi');
const p2 = new Pessoa('Clair', 'Valgoi');

p1.metodo();