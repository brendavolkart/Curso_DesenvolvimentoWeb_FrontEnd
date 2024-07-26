//        ORIENTAÇÃO A OBJETO COM JS 


class Pessoa {
    nome;
    idade;
    filhos;

    constructor(nome, idade, filhos){
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
    
    quantosFilhos() {
        if(this.filhos){
            return this.filhos.length;
        }
        return 0;
    }
    
}


 const filho1 = new Pessoa('Gustavo', 13);
 const filho2 = new Pessoa('Gabriela', 10);

 const pessoa = new Pessoa('José', 54, [filho1,filho2]);

 console.log('Quantos filhos?', pessoa.quantosFilhos())
 console.log(pessoa)