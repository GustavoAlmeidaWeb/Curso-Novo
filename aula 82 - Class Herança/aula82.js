class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} está ligado.`);
            return;
        } 

        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado.`);
            return;
        } 

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

const d1 = new DispositivoEletronico('Notebook');
const s1 = new Smartphone('iPhone','Branco','13 PRO MAX');
// d1.ligar();
console.log(s1);