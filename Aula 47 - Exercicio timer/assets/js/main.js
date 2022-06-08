function criaTimer(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaTimer(segundos)
    }, 1000);
}

iniciar.addEventListener('click', function(e){
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = 'black';
});

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(e){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
});