
const somarValor = (valor) => {
    if (valor === 0){
        return 0;    
    } else if(valor === 1) {
        return 1;
    }

    return valor + somarValor(valor - 1);
}

console.log(somarValor(4));