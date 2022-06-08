const numeros = [1,2,3,4,5,6,7,8,9]

// CONTINUE - continua para proxima iteração
// BREAK - Encerra o laço 

for (let numero of numeros){

    if(numero === 2){
        console.log('Pulei o numero 2');
        continue;
    }
    if(numero === 7){
        console.log('7 encontrado, saindo ...')
        break;
    }

    console.log(numero);
}

let i = 0;
while (i < numeros.length){

    let numero1 = numeros[i];

    if(numero1 === 2){
        console.log('Pulei o numero 2');
        i++;
        continue;
    }
    if(numero1 === 7){
        console.log('7 encontrado, saindo ...')
        i++;
        break;
    }

    console.log(numero1);
}
