class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g,''),
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCPF(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    // Método Static pois não tem o 'this'
    static geraDigito(cpfParcial){

        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let sNum of cpfParcial){
            total += reverso * Number(sNum);
            reverso--;
        }     
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCPF();
        
        return this.novoCPF === this.cpfLimpo;
        
    }

}

const validacpf = new ValidaCPF('062.504.979-94');

if(validacpf.valida()){
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}
