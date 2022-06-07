
const frutas = ['maçã', 'banana', 'morango'];

for(let indice in frutas){
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Valgoi',
    idade: 33
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])

for (let key in pessoa){
    console.log(pessoa[key])
}