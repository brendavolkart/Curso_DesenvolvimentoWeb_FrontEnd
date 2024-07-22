function teste(key){
    switch (key) {
        case 'Julio':
        case 'Brigadeiro':
            console.log('Julio/brigadeiro aqui')
            break;

        case 'José':
            console.log('José aqui')
            break;

        case 'João':
            console.log('João aqui')
            break;

        default:
            console.log('Qualquer outro aqui')
            break;
    }
}  

teste('Brigadeiro')