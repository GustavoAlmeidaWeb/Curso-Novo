const cont = document.querySelector('.container');
const div = document.createElement('div');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

// laço de repetição passando pelos itens do array
for (let i = 0; i < elementos.length; i++){

    // guardando nas variaveis os valores do array
    let { tag, texto } = elementos[i];
    
    //criando as tags
    let tagCriada = document.createElement(tag);

    //inserindo os valores das tags
    tagCriada.innerHTML = texto;

    // colocando no html a tag com o valor
    div.appendChild(tagCriada);
}

cont.appendChild(div);