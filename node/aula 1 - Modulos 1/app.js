const { nome, sobrenome, falaNome } = require('./mod.js');
const { Pessoa } = require('./mod.js');
// const mod1 = require('./mod.js');
// const fala = mod1.falaNome;

console.log(nome, sobrenome);
console.log(falaNome());

const p1 = new Pessoa('Jesus');

console.log(p1);