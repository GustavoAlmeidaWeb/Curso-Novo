function cadastro(){
    
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    
    // form.onsubmit = function (evento){
    //     evento.preventDefault()
    // }

    function recebeEventoForm(evento){
        
        evento.preventDefault()
      
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        // resultado += document.querySelector('.resultado').innerHTML = `<p>${nome} ${sobrenome}, pesa ${peso} e mede ${sobrenome} de altura</p>` 
        
        pessoas.push({
            nomepessoa: nome.value,
            sobrenomepessoa: sobrenome.value,
            pesopessoa: peso.value,
            alturapessoa: altura.value
        })

        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value}KG e mede ${altura.value} de altura</p>`

    }
    
    form.addEventListener('submit', recebeEventoForm)
}
cadastro()