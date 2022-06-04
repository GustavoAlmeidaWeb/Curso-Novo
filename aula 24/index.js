// pega a hora do momento 
const horaAgora = new Date().getHours()

if(horaAgora >= 0 && horaAgora <= 11){
    console.log('Bom dia')
} else if (horaAgora >= 12 && horaAgora <= 17){
    console.log('Boa Tarde')
} else if (horaAgora >= 18 && horaAgora <= 23) {
    console.log ('Boa noite')
} else {
    console.log('Olá')
}


// teste de if
const grana = false

if(grana){
    console.log('vou dar um role')
} else {
    console.log('não vou dar um role')
}