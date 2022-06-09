// arguments sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for(let arg of arguments){
        total += arg;
    }
    console.log(total);
}
funcao(1,2,3,4,5);

////////////////////////////

function soma (a, b = 0, c = 0){
    console.log(a + b + c);
}
soma(20, undefined, 2);

////////////////////////////

function obj ({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let objeto = {nome: 'Guss', sobrenome: 'Valgoi', idade: 33};
obj(objeto);

// Ou

obj({nome: 'Guss', sobrenome: 'Valgoi', idade: 33});

////////////////////////////

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('-', 500, 10, 20, 30, 40, 50);