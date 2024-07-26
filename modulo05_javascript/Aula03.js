//Usando POLIMORFISMO NA POO


//Usando HERANÇA NA POO

class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha){
        return email  + senha === this.nome;
    }

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usuario{
    permissoes;
    validarSenha(email, senha){
        return email === this.email && senha === this.senha;
    }

    constructor(email, senha, nome, permissoes){
        super(email, senha, nome);
        this.permissoes = permissoes
        //Método SUPER invoca o construtor da classe mãe passando os respectivos parâmetros. 
    }
    

}
class Comprador extends Usuario{
    compras;
    constructor(email, senha, nome, compras){
        super(email, senha, nome);
        this.permissoes = permissoes
        //Método SUPER invoca o construtor da classe mãe passando os respectivos parâmetros. 
    }
}


const admin = new Administrador('email@email.com', 'senha', 'Jose', [1, 6]);
const usuario = new Usuario('email', 'senha', 'nome')

console.log(usuario.validarSenha('email@email.com', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));


//POLIMORFISMO É UM PRINCIPIO DE POO QUE PERMITE USAR UM MESMO ELEMENTO/ MÉTODO DE MANEIRAS DIFERENTES ENTRE OS OBJETOS 

//EXEMPLO: Interface Animal tenha um método chamado "Emitir som"
//Para que a classe Gato extenda a interface animal é obrigatório que ele implemente o mét "emitir som" 
//No entanto o retono dessa função para um gato seria ('MIAU')
//E para um Cachorro('AUAU')
//Dessa maneira podemos entender o polimorfismo atráves das diferentes implementações do método "Emitir som"