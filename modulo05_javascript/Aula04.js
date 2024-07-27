//Object.defineProperties
//Object.defineProperty

const propriedadesPadrao = (valorInicial) => ({
    value: valorInicial, 
    writable: false, //se estiver true => usuario.nome = 'novo nome'
    configurable: false, //se estiver true => posso deletar o nome
    enumerable: true, //se estiver true => ele será exibido no objeto
})

class Usuario{
    constructor(email, senha, nome){
        Object.defineProperties(this, { 
            nome: propriedadesPadrao(nome),
            senha: propriedadesPadrao(senha),
            email: propriedadesPadrao(email)
        })
    }
} 

const usuario = new Usuario('emails', 'senhas', 'nomes');

usuario.nome = 'Novo nome';

console.log(usuario);