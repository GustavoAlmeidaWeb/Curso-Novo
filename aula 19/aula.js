/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados, ou seja, valores independentes

Referência (mutável) - array, object, function - Passados por referência, aponta pro mesmo local na memoria
*/

let a = [1,2,3]
let b = a 

console.log(a, b)