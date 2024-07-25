const pessoa = {
    idade: 35,
    peso: 80,
    nome: 'José',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
       
}

const exibirInformacoes = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do(a)${pessoa.nome}:`, pessoa[qualInformacao])
}

exibirInformacoes(pessoa, 'peso');

//Manipulando objeto com JS