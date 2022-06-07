
// Função reutilizavel
function saudacao(nome){
    
    return `Boa noite ${nome}`
}

const variavel = saudacao('Gustavo')
saudacao('Ana Paula')

console.log(variavel)


function soma (x,y){
    const res = x + y
    return res
}

console.log(soma(2,1))
console.log(soma(15,23))
console.log(soma(7,7))

const raiz = function(n){
    return `A raiz quadrada de ${n} é: ${n ** 0.5}`
}

// const raiz = (n) => n ** 0.5 // Arrow Function 

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))