const pessoas = [
    { id: 3, nome: 'Gustavo'},
    { id: 2, nome: 'Clair'},
    { id: 1, nome: 'Ana Paula'},
];

// const novasPessoas = {};

// for(const {id, nome} of pessoas){
//     console.log(id,nome);
// }

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for(const [identifier, {id, nome}] of novasPessoas){
    console.log(nome);
    
}

for(const pessoas of novasPessoas.values()){
    console.log(nome);
    
}

// console.log(novasPessoas);