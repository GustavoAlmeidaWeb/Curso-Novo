let num1 = Number(prompt('Digite um número:'))

let res = document.getElementById('resultado')
 
res.innerHTML += `<h1>Seu número é ${num1}</h1>`
res.innerHTML += `<p>Raiz quadrada: ${num1 ** 0.5}</p>` 
res.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`
res.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`
res.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(num1)}</p>`
res.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(num1)}</p>`
res.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`