/*

// ALERTA SIMPLES
alert('Com a nossa mensagem')

// ALERTA DE CONFIRMAÇÃO
confirm('Deseja alterar a página ?')

// USUARIO DIGITA VALOR
prompt('Digite seu nome:')

*/

//EXEMPLO DE UTILIZAÇÃO CONFIRM
let confirma = confirm('Deseja continuar ?')

let numero1 =  prompt('Digite sua idade')
numero1 = Number(numero1)
let numero2 = prompt('Digite a idade de sua mãe')
numero2 = Number(numero2)

const res = numero1 + numero2

alert(`As idades somadas são ${res}`)