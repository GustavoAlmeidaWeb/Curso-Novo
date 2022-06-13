function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),

        clearDisplay(){
            this.display.value = '';
        },
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.addEventListener('keyup', e => {
                if(e.keycode === 13){
                    this.realizaConta();
                }
            });
        },
        realizaConta(){
            let conta = this.display.value;

            try{

                conta = eval(conta);

                if(!conta){
                    alert('conta invalida');
                    return;
                }

                this.display.value = String(conta);

            } catch (e){
                alert('conta invalida');
            }
        },
        cliqueBotoes(){
            // this -> Calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();