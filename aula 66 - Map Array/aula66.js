// Dobre os números

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numDobro = num.map(valor => valor * 2);

console.log(numDobro);

const pessoas = [
    { nome: 'Gustavo', idade: 33 },
    { nome: 'Clair', idade: 59 },
    { nome: 'Ana Paula', idade: 25 },
    { nome: 'Jesus', idade: 40 },
    { nome: 'Deus', idade: 56 },
    { nome: 'Teste', idade: 99 },
];

const nomePessoa = pessoas.map(obj => obj.nome);
const chaveIdade = pessoas.map(obj => ({ idade: obj.idade }));

const ids = pessoas.map(function(obj,indice){
    obj.id = (indice + 1) * 100;
    return obj;
});

console.log(ids);