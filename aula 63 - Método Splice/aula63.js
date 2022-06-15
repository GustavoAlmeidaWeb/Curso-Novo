//                -5        -4         -3         -2       -1
//                 0         1          2          3        4
const nomes = ['Gustavo', 'Clair', 'Ana Paula', 'Jesus', 'Deus'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
//pop
const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);

let nomes1 = ['Gustavo', 'Clair', 'Ana Paula', 'Jesus', 'Deus'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
//pop
const removidos1 = nomes1.splice(-1, Number.MAX_VALUE);
console.log(nomes1, removidos1);

const removidos2 = nomes1.splice(1, 2, 'Ana Paula');
console.log(removidos2);