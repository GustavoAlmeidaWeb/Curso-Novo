export const nome = 'Gustavo';
export const sobrenome = 'Almeida';
export const idade = 33;

export function soma(x, y){
    return x + y;
}

// export (x, y) => x * y;

export default class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}