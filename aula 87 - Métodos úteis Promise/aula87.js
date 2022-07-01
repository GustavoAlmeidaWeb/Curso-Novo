function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject('BAD Value'); 
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - OK');
        }, tempo);
    });

}

//Promise.all Promise.race Promise.resolve Promise.reject
/*
    Promise.all - EXECUTA E MOSTRA O RESULTADO DE TODAS AS PROMISES
    Promise.race - EXECUTA E MOSTRA A PRIMEIRA PROMISE RESOLVIDA
    Promise.resolve - CAI NO THEN
    Promise.reject - CAI NO CATCH
*/

const promises = [
    // 'Primeiro Valor',
    espera('Promise 1', rand(1, 3)),
    espera('Promise 2', rand(1, 3)),
    espera('Promise 3', rand(1, 3)),
    // espera(1000, 1000),
    // 'Outro valor'
];

// Promise.all(promises)
//  .then(valor => {
//     console.log(valor);
//  })
//  .catch(e => {
//     console.log(e);
//  })

//  Promise.race(promises)
//  .then(valor => {
//     console.log(valor);
//  })
//  .catch(e => {
//     console.log(e);
//  })

function baixaPage(){
    const cache = true;

    if(cache){
        return Promise.reject('Página em cache.');
    } else {
        return espera('Baixei a página', 3000);
    }
}

baixaPage()
    .then(dadosPage => {
        console.log(dadosPage);
    })
    .catch(e => {
        console.log('Erro: ', e);
    })