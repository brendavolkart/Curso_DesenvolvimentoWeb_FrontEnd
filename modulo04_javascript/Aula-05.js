// USANDO O MÉTODO REDUCE C/ ARRAY
//Por exemplo: Podemos converter o array em um objeto

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

// const pessoa = {
//     José: {
//         idade: 54,
//     },
//     João: {
//         idade: 65,
//     },
//     Maria: {
//         idade: 23,
//     },
// }

// pessoa.jose.idade;


//DESSA FORMA NÃO HÁ A NECESSIDADE DE PERCORRER O ARRAY INTEIRO
//-------------------------------------------------------------

//O MÉTODO REDUCE NOS AJUDA A FAZER ALGO PARECIDO COM UM ARRAY!

const funcaoReduce = (acc, objeto) => {
        return {
            ...acc,
            [objeto.nome]:{
                idade: objeto.idade
            }
        }
}

const pessoas = lista.reduce(funcaoReduce,{});

console.log(pessoas)
console.log(pessoas.Pedro.idade)