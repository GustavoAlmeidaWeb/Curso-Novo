class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Método de Instância
    aumentarVol(){
        this.volume += 2;
    }
    diminuirVol(){
        this.volume -= 2;
    }

    // Método Estático
    static trocaPilha(){
        console.log('Ok, vou trocar.');
    }
    // Método Estático
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVol();
controle1.aumentarVol();
controle1.aumentarVol();

console.log(controle1);

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(10, 20));
console.log(Math.random());