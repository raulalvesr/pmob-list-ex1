function soma(n1, n2) {
    return n1 + n2;
} 

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    if (n2 == 0)
        throw 'Não é possível dividir por zero';

    return n1 / n2;
}