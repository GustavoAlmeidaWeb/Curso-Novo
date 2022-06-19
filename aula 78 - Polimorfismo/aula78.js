//SuperClasse
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    console.log(`Você realizou um saque no valor de R$ ${valor.toFixed(2)}`);
    console.log(`Seu saldo agora é R$ ${this.saldo.toFixed(2)}`);
    
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(
    `AG/C ${this.agencia} / ${this.conta} | Saldo R$ ${this.saldo.toFixed(2)}`
    );
};

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    console.log(`Você realizou um saque no valor de R$ ${valor.toFixed(2)}`);
    console.log(`Seu saldo agora é R$ ${this.saldo.toFixed(2)}`);
    
};

function Poupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;


const conta1 = new CC(98, 444219, 3000, 9000);
conta1.sacar(6000);