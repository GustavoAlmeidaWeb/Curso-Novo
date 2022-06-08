const num1 = 1801;
const num2 = 1;

// maior(num1, num2);
max(num1, num2);

// function maior(x, y){
//     if (x > y){
//     console.log(`O maior número é ${x}`);
//     } else if (y > x){
//         console.log(`O maior número é ${y}`);
//     } else {
//         console.log('Os números são iguais!')
//     }
// }

function max(x, y){
    return x > y ? `O maior número é ${x}` : `O maior número é ${y}`;
}

const max2 = (x, y) => x > y ? `O maior número é ${x}` : `O maior número é ${y}`;

console.log(max(num1, num2));

console.log(max2(num1, num2));