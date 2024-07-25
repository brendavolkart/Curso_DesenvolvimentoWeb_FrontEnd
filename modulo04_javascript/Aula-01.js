
//array map pode converter o array para outro tipo. Ex: Array que exiba só idade:

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


//const converterObjeto = (objeto) => {

//    return{
//      nome: objeto.nome,
//        idade: objeto.idade, 
//        nomeIdade: `${objeto.nome} + ${objeto.idade} `
//    }
//}


//TAMBÉM PODEMOS MANIPULAR DESSA FORMA:

const converterObjeto = (objeto) => {

    return objeto.nome
}

//Assim podemos retornar só os nomes e podemos fazer o mesmo com as outras informações.

console.log(lista.map(converterObjeto));


