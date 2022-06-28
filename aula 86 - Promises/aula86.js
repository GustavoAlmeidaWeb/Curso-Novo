function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('BAD Value');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });

}

espera('Conectando ao DB...', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando base de dados...', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e=>{
        console.log('ERROR: ', e);
    });

    console.log('É exibido por primeiro');