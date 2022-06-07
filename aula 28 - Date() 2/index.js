// const data = new Date()

function zeroaEsq(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroaEsq(data.getDate())
    const mes = zeroaEsq(data.getMonth()+1)
    const ano = zeroaEsq(data.getFullYear())
    const hora = zeroaEsq(data.getHours())
    const min = zeroaEsq(data.getMinutes())
    const seg = zeroaEsq(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} `
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)