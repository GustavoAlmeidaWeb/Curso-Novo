// defineProperty -> Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivate = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, //configuravel true or false
        get: function(){
            return estoquePrivate;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Jacu!');
                return;
            }
            estoquePrivate = valor;
        }
    });
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

// const prod = new Produto('Camiseta Volcom', 99, 10);
// prod.estoque = 999;
// // console.log(prod);
// // console.log(Object.keys(prod));
// console.log(prod.estoque);

const prod1 = criaProduto('note');
prod1.nome = 'Gustavo'
console.log(prod1.nome);