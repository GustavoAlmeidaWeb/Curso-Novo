import geraSenha from "./geradores.js";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada selecionado';
}