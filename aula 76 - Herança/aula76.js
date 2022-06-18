// Produto -> Aumento e Desconto
// Camiseta, caneca, lápis

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (perc){
    this.preco = this.preco + (this.preco * (perc / 100));
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const prod1 = new Produto('Qualquer', 10);
const cam1 = new Camiseta('Regata', 50, 'Branca');
const cane1 = new Caneca('Star Wars', 20, 'Porcelana', 100);

console.log(cam1);
console.log(prod1);
console.log(cane1);
console.log(cane1.estoque);