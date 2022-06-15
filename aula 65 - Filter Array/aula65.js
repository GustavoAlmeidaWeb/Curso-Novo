// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor){
//     return valor > 10;
// }
// const num1 = num.filter(callbackFilter);

const num1 = num.filter((valor, indice) => { 
    console.log(valor, indice);
    return valor > 10;
});

// console.log(num1);

const pessoas = [
    { nome: 'Gustavo', idade: 33 },
    { nome: 'Clair', idade: 59 },
    { nome: 'Ana Paula', idade: 25 },
    { nome: 'Jesus', idade: 40 },
    { nome: 'Deus', idade: 56 },
    { nome: 'Teste', idade: 99 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasCom50 = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminacomA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasTerminacomA);