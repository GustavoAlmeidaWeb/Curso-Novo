// LET tem escopo de bloco {... bloco...}
// VAR tem escopo de função

const verdadeiro = true

let nome1 = 'Gustavo' // criando
var nome2 = 'Ana Paula' // criando

if(verdadeiro){
    let nome = 'Clair' // criando
    var nome2 = 'Guss'

    if(verdadeiro){
        var nome2 = 'Clair'
        let nome ='Outra coisa'
    }
}