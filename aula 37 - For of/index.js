const nomes = ['Gustavo', 'Ana Paula', 'Clair']

for(let valor of nomes){

    console.log(valor);

}

console.log('           ');

//É A MESMA COISA QUE 
for(let valor in nomes){

    console.log(nomes[valor]);

}

console.log('           ');

nomes.forEach(function(valor, indice){
    console.log(valor, indice)
})

// FOR Clássico - Geralmente com iteráveis (array ou strings)
// FOR IN - Retorna o índice ou chave (string, array ou objetos)
// FOR OF - Retorna o valor em si (iteráveis, arrays ou strings)