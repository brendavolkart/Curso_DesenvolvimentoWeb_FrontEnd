const idade = 9;
const nome = 'Paulo';
let podeEntrar = false; 


if(idade >= 18 || nome === 'Julio'){
    podeEntrar = true;
    console.log('ENTROU!')
}else {
    console.log('NÃO ENTRA!')
}

// || = OR e && = AND; 
// = (atribuição)
// == (comparação independente do tipo)
// === (comparação entre tipos iguais, ou seja, string com string e número com número etc)