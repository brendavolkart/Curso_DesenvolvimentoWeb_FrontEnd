

//MANIPULANDO UM ARRAY DE KEYS


const lista = [
    {
        nome: "João",
        idade: 17
    },
    {
        nome: "Fernanda",
        idade: 8
    },
    {
        nome: 'Maria',
        idade: 7
    },
    {
        nome: "Sandra",
        idade: 90
    },
    {
        nome: "José",
        idade: 13
    },
    {
        nome: 'Pedro',
        idade: 25
    },
]

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce,{});

//VAMOS USAR O MÉTODO KEYS PARA CONVERTER UM OBJETO EM UM ARRAY

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) =>({
    nome: chave,
    idade: pessoas[chave].idade
}))

console.log(listaDeVolta);