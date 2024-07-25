//USANDO O ARRAY FIND 

// MÉTODO FIND PROCURA UM OBJETO COM AQUELA CONDIÇÃO E O PRIMEIRO QUE ELE ACHAR ELE DEVOLVE PARA UM OBJETO

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

const novaPessoa = lista.find((pessoa) => pessoa.nome === 'Pedro');

console.log(novaPessoa);