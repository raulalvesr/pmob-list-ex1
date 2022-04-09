const soma = (n1, n2) => n1 + n2;

const subtracao = (n1, n2) => n1 - n2;

const multiplicacao = (n1, n2) => n1 * n2;

const divisao = (n1, n2) => {
    if (n2 == 0)
        throw 'Não é possível dividir por zero';

    return n1 / n2;
}

const operacoes = {
    1: soma,
    2: subtracao,
    3: multiplicacao,
    4: divisao,
}