const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Valgoi',
    idade: 33,
    endereco: {
        rua: 'Francisco de Assis',
        numero: 22
    }
};

// Atribuição via desestruturação


// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);

// Mudando o nome da chave
// const { nome: name1 , sobrenome, idade } = pessoa;
// console.log(name1, sobrenome, idade);

// const { endereco: {rua, numero} } = pessoa;
// console.log(rua, numero);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);