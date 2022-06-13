// FACTORY FUNCTION - Função fábrica
// CONSTRUCTOR FUNCTION - Função construtora
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto = 'está falando Nada.'){
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // GETTER - Tranforma a function em atributo simples pra busca de valores
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}
// const p1 = criaPessoa('Gustavo', 'Almeida', 1.85, 89);
// const p2 = criaPessoa('Ana Paula', 'Grando', 1.65, 60);

// console.log(p1.fala('falando oi'));
// console.log(`O IMC de ${p1.nome} está em ${p1.imc}`);
// console.log(`O IMC de ${p2.nome} está em ${p2.imc}`);
const p1 = criaPessoa('Ana Paula', 'Grando');
p1.nomeCompleto = 'Gustavo Thales Valgoi de Almeida';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

