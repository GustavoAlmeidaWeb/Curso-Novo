const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// [ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]
// 324
const pares = num.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador += valor);

console.log(pares);