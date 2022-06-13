// IIFE - Immediately invoked function expression

(function(){
    const nome = 'Gustavo';
    console.log(nome);
})();

const nome = 'Ana Paula';

(function(idade, peso, altura){

    console.log(idade, peso, altura);

})(33, 89, 1.85);