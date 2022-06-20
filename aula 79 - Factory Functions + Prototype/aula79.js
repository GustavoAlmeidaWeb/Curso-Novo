function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`);
        },
        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
        comer(){
            console.log(`${this.nome} está comendo.`);
        },
    }
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

// OUUUUUU

const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
}
const pessoaPrototype = Object.assign({}, falar, beber, comer);

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}


const p1 = criaPessoa('Gustavo','Almeida');
const p2 = criaPessoa('Ana Paula','Grando');
console.log(p2.falar());
console.log(p1.beber());
console.log(p1.comer());
