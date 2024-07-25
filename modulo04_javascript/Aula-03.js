
//USANDO O ARRAY FILTER
// O qual consegue filtrar informações nos arrays 

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
const filtrarPessoa = (pessoa) => pessoa.idade > 30;

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(listaFiltrada)
console.log(lista);