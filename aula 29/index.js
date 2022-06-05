
function getdayweek(diaSemana){

    let diaSemanatexto

    switch(diaSemana){
        case 0:
            diaSemanatexto = 'Domingo'
            return diaSemanatexto
        case 1:
            diaSemanatexto = 'Segunda'
            return diaSemanatexto
        case 2:
            diaSemanatexto = 'Terça'
            return diaSemanatexto
        case 3:
            diaSemanatexto = 'Quarta'
            return diaSemanatexto
        case 4:
            diaSemanatexto = 'Quinta'
            return diaSemanatexto
        case 5:
            diaSemanatexto = 'Sexta'
            return diaSemanatexto
        case 6:
            diaSemanatexto = 'Sábado'
            return diaSemanatexto
        default:
            diaSemanatexto = ''
            return diaSemanatexto
    }
    
}

const data = new Date()
const diaSemana = data.getDay()
const diaSemanatexto = getdayweek(diaSemana)

console.log(diaSemana, diaSemanatexto)