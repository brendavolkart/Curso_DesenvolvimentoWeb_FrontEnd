function calcular(valor){
    if(valor === 0){
        throw new Error('Não pode ser 0');
    }
    return valor/2;
}

try{
    const resultado = calcular(0);
    console.log('resultado: ', resultado);

}catch (error) {
    console.log(error.message)
}finally{
    console.log('Chegou no finally!')
}


//Try e catch são usados para tratar erros e exceções pois eles evitam que o sistema pare caso aconteça algum erro.
//Finally é usado junto deles caso voce queira desfazer aquilo que causou o erro visando evitar de mais erros.
