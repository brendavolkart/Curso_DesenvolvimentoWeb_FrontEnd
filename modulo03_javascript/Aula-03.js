const teste1 = (callBack) => {
    setTimeout(() => {
        console.log('teste1');
    }, 200)
}
const teste2 = (callBack) => {
    setTimeout(() => {
        console.log('teste2');
        callBack();
    }, 600)
}
const teste3 = (callBack) => {
    setTimeout(() => {
        console.log('teste3');
    }, 300)
}
const teste4 = (callBack) => {
    setTimeout(() => {
        console.log('teste4');
    }, 1)
}

const funcaoCallBack = () => {
    console.log('SALVOU O USUARIO!')
}

teste1();
console.log(1 + 1)
teste2(funcaoCallBack);
teste3();
console.log(2 + 2)
teste4();


// SetTimeout recebe uma função e executa ela depois de X tempo em milésimo de segundos.