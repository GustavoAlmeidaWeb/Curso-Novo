// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b,c,a];
// [a,b,c] = letras;

// console.log(a,b,c);

//...rest, ...spread
// Indice        0   1   2   3   4   5   6   7   8
const numeros = [101,202,303,404,505,606,707,808,909];
const [primeiro, segundo, terceiro, ...resto] = numeros;
const[um, ,tres, ,cinco, ,sete] = numeros;

console.log(primeiro, segundo, terceiro);
console.log(resto);
console.log(um, tres, cinco, sete);


// Indices           0        1        2
                // 0 1 2    0 1 2    0 1 2
const numeros1 = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = numeros1

console.log(numeros1[1][1])
console.log(lista3[1])