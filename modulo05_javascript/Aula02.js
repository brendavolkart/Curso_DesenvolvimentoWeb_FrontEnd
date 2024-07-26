//Usando HERANÇA NA POO

class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    permissoes;
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

console.log(admin)