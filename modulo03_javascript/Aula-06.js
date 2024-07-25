
const somarValor = (valor) => {
    if (valor === 0){
        return 0;    
    } else if(valor === 1) {
        console.log("somarValor("+valor+") = 1\n")
        return 1;
    }
    console.log(valor + " fez chamada recursiva para: somarValor("+(valor-1)+")\n")
    soma = valor + somarValor(valor - 1)
    console.log("somarValor("+valor+") = " + soma + "\n")
    return soma;
}

somarValor(4);