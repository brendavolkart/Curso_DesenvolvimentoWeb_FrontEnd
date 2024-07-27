//SUPONHA QUE VOCE ESTÁ DESENOLV UM SISTEMA DE GESTÃO DE VENDAS DE PRODUTOS ELETRÔNICOS 
// ------------------------------------------------------------------------------------


class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidadeEstoque;

    constructor(nome, preco, descricao, codigo, quantidadeEstoque) {
        this.nome = nome
        this.preco = preco;
        this.descricao = descricao;
        this.codigo = codigo;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    alterarPreco(preco) {
        if (preco < 0) {
            throw new TypeError("VALOR DO PRODUTO PRECISA SER UM NÚMERO POSITIVO!")
        }
        return this.preco = preco;
    }

    aumentarEstoque(novoValorEstoque) {
        if (novoValorEstoque <= 0) {
            throw new TypeError("A quantidade deve ser maior do que zero")
        }
        return this.quantidadeEstoque += novoValorEstoque;
    }

    diminuirEstoque(novoValorEstoque) {
        if (this.quantidadeEstoque - novoValorEstoque <= 0) {
            throw new TypeError("ESTOQUE NÃO PODE ESTAR VAZIO!")
        }
        this.quantidadeEstoque -= novoValorEstoque;
    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    sistemaOperacional;

    constructor(nome, preco, descricao, codigo, quantidadeEstoque, marca, modelo, sistemaOperacional) {
        super(nome, preco, descricao, codigo, quantidadeEstoque);
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperacional = sistemaOperacional;
    }

    descricaoSmartphone (smartphone){
        console.log(smartphone)
    }

}

const smartphone = new Smartphone("celular", 1200, "telefone celular", "1234", 2, "Apple", "Iphone 11", "IOS")

const produto = new Produto("celular", 1200, "telefone celular", "1234", 2);

//FUNÇÃO QUE ATUALIZA O PREÇO
//---------------------------
// console.log(produto)
// produto.alterarPreco(100)
// console.log(produto)
//---------------------------


//FUNÇÃO QUE AUMENTA A QNTD EM ESTOQUE
//------------------------------------
// console.log(produto)
// produto.diminuirEstoque(2)
// console.log(produto)
//------------------------------------


//FUNÇÃO QUE MOSTRA AS ESPECIFICAÇÕES DO SMARTPHONE
//------------------------------------
// smartphone.descricaoSmartphone(smartphone)
//------------------------------------

