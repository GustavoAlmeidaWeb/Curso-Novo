// return
// Retorna um valor
// Termina a função

function soma(a ,b){
    return a + b;
}

soma(2,8);

//

function criaPessoa(nome, sobrenome){
    return { nome, sobrenome };
}

console.log(criaPessoa('Ana Paula', 'Grando'));

//

function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));