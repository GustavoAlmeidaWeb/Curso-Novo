// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: true, //controle se o valor pode ser alteravel
        configurable: false //configuravel true or false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, //controle se o valor pode ser alteravel
            configurable: false //configuravel true or false
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: true, //controle se o valor pode ser alteravel
            configurable: false //configuravel true or false
        },
    })
}

const prod = new Produto('Camiseta Volcom', 99, 10);
console.log(prod);
// console.log(Object.keys(prod));
