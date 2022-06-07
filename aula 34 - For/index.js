// Exemplos de FOR

for(let i = 0; i <= 10; i++){
    console.log(`Gustavo Lindo ${i}`)
}

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['maçã', 'laranja', 'uva'];

for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}