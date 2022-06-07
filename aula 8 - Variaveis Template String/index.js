const nome = 'Gustavo'
const sobrenome = 'Almeida'
const idade = 33
const peso = 88
const altura = 1.85
let imc
let anonasc

imc = peso / (altura * altura)
anonasc = new Date()
ano = anonasc.getFullYear() - idade
 
console.log(`O ${nome} ${sobrenome} tem ${idade} anos, mede ${altura} de altura, pesa ${peso} KG tem ${imc} de IMC e nasceu em ${ano}`)
