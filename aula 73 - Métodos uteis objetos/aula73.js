const prod = { nome: 'Camisa', preco: 1.90 };
const outro = {...prod}; // copia os valores do objeto
// ou
const outro1 = Object.assign(outro);

outro.nome = 'Calça';

// console.log(prod);
// console.log(outro);
// console.log(outro1);

Object.defineProperty(prod, 'nome',{
    writable: false,
    configurable: false,  
})
// console.log(Object.getOwnPropertyDescriptor(prod, 'nome'));
// Retorna as Properties ou Property

// prod.nome = 'Gustavo';

// console.log(prod.nome);

const prod1 = { nome: 'Camisa', preco: 1.90, tamanho: 'M' };

for(let valor of Object.entries(prod1)){
    console.log(valor[0], valor[1])
}