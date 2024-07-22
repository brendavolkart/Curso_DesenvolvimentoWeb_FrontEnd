// 3 maneiras de declarar funções

function calcular(){
    console.log('Calcular1')
}

const calcular2 = function() {
    console.log('Calcular2')
    return 1234
}

const calcular3 = (funcao) => {
    console.log('Calcular3')
    funcao()
}
calcular();
console.log('resultado', calcular2());
calcular3(calcular2);