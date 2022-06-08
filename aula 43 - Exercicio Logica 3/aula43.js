// Minha Solução OBS.: Bem mais trabalho
function FizzGuss(n){
    if(!isNaN(n)){
        if(n >= 0 && n <= 100){
            if ( n % 3 === 0 ){
                if ( n % 5 === 0 ){
                    
                    // console.log(`Seu número é ${n}`);
                    return 'FizzBuzz';
                }
                return 'Fizz';
            } else if ( n % 5 === 0 ){

                // console.log(`Seu número é ${n}`);
                return 'Buzz';

            } else if ( n % 5 !== 0 && n % 3 !== 0){
                
                // console.log(`Seu número é ${n}`);
                return n;
            }
        } else {
            return 'Seu número é maior que 100!'
        }
    } else {
        return 'Não é um número!';
    }
}

// Solução do Professor
function FizzBuzz(n){
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0 ) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

for(let i = 0; i <= 100; i++){
    console.log(i, FizzGuss(i))
}