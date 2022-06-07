
/* CURTO-CIRCUITO

&& -> false & true -> false "o valor mesmo"
|| -> retorna o primeiro valor verdadeiro

FALSY
false
0
'' "" ``
null / undefined
NaN

*/
 function falaOi(){
     return 'Oi'
 }

 let vaiExecutar = 'qualquer coisa'

 console.log(vaiExecutar && falaOi())


 // CURTO CIRCUITO - OR ||

console.log(0 || false || null || 'Gustavo' || true)

const corUsuario = 'Vermelho'
const corPadrao = corUsuario || 'Preto' // RETORNA PRIMEIRO VALOR VERDADEIRO

console.log(corPadrao)