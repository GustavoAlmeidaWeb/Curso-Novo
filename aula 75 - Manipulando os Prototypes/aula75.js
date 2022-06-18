
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);

//
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

// Objeto Literal
const p2 = {
    nome: 'Celular',
    preco: 1900
}
// Setando prototype P2 -> como objeto literal
Object.setPrototypeOf(p2, Produto.prototype);

const p1 = new Produto('Camisa',50);

p1.aumento(50);
p2.aumento(15);

console.log(p2);

// Usando o Object Create e setando os valores 

const p3 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 'Notebook',
    },  
    preco: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 2000,
    },
});

p3.aumento(10);
console.log(p3);
