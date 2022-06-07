const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;
console.log(bgColorBody)

for(let p of ps){

    p.style.background = bgColorBody;
    p.style.color = 'white';

}