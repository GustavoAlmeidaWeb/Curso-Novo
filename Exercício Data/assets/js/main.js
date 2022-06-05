const data = new Date();
const h1 = document.querySelector('.container h1');

function getdayweek(diaSemana){

    // Poderia ser usado um switch também

    let diaSemanatexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return diaSemanatexto [diaSemana];

}

function getmonthyear(mesAno){

    // Poderia ser usado um switch também

    let mesanotexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro']
   
    return mesanotexto[mesAno];

}

function zeroaEsq(num){

    // Coloca um 0 a esquerda quando o número for menor q 10
    
    return num >= 10 ? num : `0${num}`
}

function criaDate (data){
    
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getdayweek(diaSemana);
    const nomeMes = getmonthyear(numeroMes);

    return (
        `${nomeDia}, ${zeroaEsq(data.getDate())} de ${nomeMes} de ${data.getFullYear()}
         ${zeroaEsq(data.getHours())}:${zeroaEsq(data.getMinutes())}`
        );
}

h1.innerHTML = criaDate(data)

/* MELHOR OPÇÃO - FAZ A MESMA FUNÇÃO do que todo o codigo acima só que em 3 linhas*/

// const data = new Date();
// const h1 = document.querySelector('.container h1');
// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});