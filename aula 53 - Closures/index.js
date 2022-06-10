
// CLOSURE é a habilidade que função tem em acessar seu escopo léxico
function retornaFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Gustavo');
const funcao2 = retornaFuncao('Ana Paula');
console.dir(funcao);
console.dir(funcao2);