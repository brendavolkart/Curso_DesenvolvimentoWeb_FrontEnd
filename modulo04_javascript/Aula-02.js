
//MANIPULANDO ARRAY USANDO FOR EACH 

const lista = [
    {
        nome: 'José',
        idade: 13
    },
    {
        nome: 'João',
        idade: 17
    },
    {
        nome: 'Fernanda',
        idade: 8
    },
    {
        nome: 'Maria',
        idade: 7
    },
    {
        nome: 'Sandra',
        idade: 90
    },
    {
        nome: 'Pedro',
        idade: 25
    },
]

// let soma = 0;

// for (i = 0; i < lista.length; i++){
//     soma += lista[i].idade
// }

// -------------------------------------

// DESSA FORMA SIMPLIFICAMOS O USO DO FOR 

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
    
// console.log('Soma:', soma)
}

lista.forEach(somaIdade)

console.log('Soma:', soma)