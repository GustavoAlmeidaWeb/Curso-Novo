function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('BAD Value'); 
                return;
            }

            resolve(msg.toUpperCase() + ' - OK');
        }, tempo);
    });

}

// espera('Fase 1', rand(0, 2))
//     .then(valor => {
//         console.log(valor);
//         return espera('Fase 2', rand(0, 2));
//     })
//     .then(fase => {
//         console.log(fase);
//         return espera('Fase 3', rand(0, 2))
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => {
//         console.log(e);
//     })

async function executa(){
    try{
        const fase1 = await espera('Fase 1', rand(0, 2));
        console.log(fase1);
    
        const fase2 = await espera('Fase 2', rand(0, 2));
        console.log(fase2);
    
        const fase3 = await espera('Fase 3', rand(0, 2));
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3);

    } catch (e) {
        console.log('ERRO', e);
    }
}
executa();

/*
- 3 estados da Promise

pending -> pendente
fullfilled -> resolvida
reject -> rejeitada

*/