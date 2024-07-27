//SUPONHA QUE VOCE ESTÁ DESENOLV UM SISTEMA DE GESTÃO DE VENDAS DE PRODUTOS ELETRÔNICOS 
// ------------------------------------------------------------------------------------


class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;

    constructor(nome, preco, descricao, codigo, quantidade_em_estoque) {
        this.nome = nome
        this.preco = preco;
        this.descricao = descricao;
        this.codigo = codigo;
        this.quantidade_em_estoque = quantidade_em_estoque;
    }

    alterarPreco(preco) {
        if (preco < 0) {
            throw new TypeError("VALOR DO PRODUTO PRECISA SER UM NÚMERO POSITIVO!")
        }
        return this.preco = preco;
    }

    aumentarEstoque(quantidade_em_estoque) {
        if (quantidade_em_estoque <= 0) {
            throw new TypeError("ESTOQUE NÃO PODE ESTAR VAZIO!")
        }
        return this.quantidade_em_estoque = quantidade_em_estoque;
    }

    diminuirEstoque(quantidade_em_estoque) {
        if (quantidade_em_estoque <= 0) {
            throw new TypeError("ESTOQUE NÃO PODE ESTAR VAZIO!")
        }
        this.quantidade_em_estoque = quantidade_em_estoque;
    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    sistemaOperacional;

    constructor(nome, preco, descricao, codigo, quantidade_em_estoque, marca, modelo, sistemaOperacional) {
        super(nome, preco, descricao, codigo, quantidade_em_estoque);
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
// produto.alterarPreco(-1)
// console.log(produto.preco)
//---------------------------


//FUNÇÃO QUE AUMENTA A QNTD EM ESTOQUE
//------------------------------------
// console.log(produto)
// produto.diminuirEstoque(0)
// console.log(produto.quantidade_em_estoque)
//------------------------------------


//FUNÇÃO QUE MOSTRA AS ESPECIFICAÇÕES DO SMARTPHONE
//------------------------------------
smartphone.descricaoSmartphone(smartphone)
//------------------------------------

