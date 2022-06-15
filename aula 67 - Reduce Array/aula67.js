// Acumulador é primeiro elemento do Array
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = num.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
});

console.log(total);

const pessoas = [
    { nome: 'Gustavo', idade: 33 },
    { nome: 'Clair', idade: 59 },
    { nome: 'Ana Paula', idade: 25 },
    { nome: 'Jesus', idade: 40 },
    { nome: 'Deus', idade: 56 },
    { nome: 'Teste', idade: 99 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);