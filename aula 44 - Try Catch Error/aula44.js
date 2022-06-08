let num1 = 10
let num2 = "20"

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números.');
    }
    return x + y;
}

try{

    console.log(soma(num1, num2))

} catch(error){

    console.log(error);
    console.log('Ou alguma coisa mais fácil pro usuario entender')

}