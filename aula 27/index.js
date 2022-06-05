// (Condição) ? 'Valor Verdadeiro' : 'Valor Falso' - TERNÁRIO

const pontUser = 5000
const nivelUser = pontUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = null
const corPadrao = corUsuario || 'black'

console.log(nivelUser, corPadrao)