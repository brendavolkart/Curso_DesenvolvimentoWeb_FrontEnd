// UTILIZANDO GET E SET NA CLASSE COM JS


const propriedadesPadrao = (valorInicial) => ({
    value: valorInicial, 
    writable: false, //se estiver true => usuario.nome = 'novo nome'
    configurable: false, //se estiver true => posso deletar o nome
    enumerable: false, //se estiver true => ele será exibido no objeto
})

class Usuario{
    constructor(email, senha, nome){
        Object.defineProperties(this, { 
            nome: {
                get: () => nome, 
                set: (value) => nome = value 
            },
            senha: {
                get: () => senha, 
                set: (value) => {
                    if(value.length < 4){
                        throw new TypeError("Precisa de pelo menos 4 letras")
                    } 
                    senha = value  
                } 
            },
            email: {
                get: () => email, 
                set: (value) => email = value 
            }
        })
    }
}

const usuario = new Usuario ('emails', 'senhas', 'nomes')

// usuario.nome = "brenda"
usuario.senha = "jn"
// console.log(usuario.nome)
console.log(usuario.senha)