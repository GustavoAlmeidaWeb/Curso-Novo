// try{
//     // testa o programa
// }catch(e){
//     // trata os erros
// }finally{
//     // sempre é executado
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:00:00');
    const hora = retornaHora(data)
    console.log(hora)
    
} catch (e){

    console.log('Campos incorretos')

} finally {

    console.log('Tenha um bom dia')
}