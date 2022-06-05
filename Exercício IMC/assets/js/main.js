function calcularIMC(){
    
    let res = document.querySelector('div#resultado')
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let resultado = peso/(altura * altura)
    
    if(resultado < 18.5){

        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está abaixo do peso</p>`

    } else if (resultado >= 18.5 && resultado <= 24.9){

        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está no peso normal</p>`

    } else if (resultado >= 25 && resultado <= 29.9){

        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está em sobrepeso</p>`

    } else if (resultado >= 30 && resultado <= 34.9){
        
        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está em obesidade grau 1</p>`

    } else if (resultado >= 35 && resultado <= 39.9){

        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está em obesidade grau 2</p>`

    } else if (resultado >= 40 && resultado <= 56){

        res.innerHTML = `<p class="resTela">Seu IMC está em ${resultado.toFixed(2)} - Você está em obesidade grau 3</p>`

    } else {

        res.innerHTML = `<p class="resTela">Por favor, preencha os campos corretamente.</p>`

    }
}