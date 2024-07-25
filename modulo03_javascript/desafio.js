const seqFibonacci = (indice) => {
    if (indice === 1 || indice === 2){
        return 1;
    }

    return seqFibonacci(indice - 2) + seqFibonacci(indice - 1);
}