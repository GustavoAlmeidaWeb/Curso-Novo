function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

// function funcInterval(){
//     console.log(mostraHora());
// }

// define um intervalo de execução
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

// define tempo de execução
setTimeout(function(){
    clearTimeout(timer);
}, 10000);