export const soma = (n1, n2) => n1 + n2;

export const subtracao = (n1, n2) => n1 - n2;

export const multiplicacao = (n1, n2) => n1 * n2;

export const divisao = (n1, n2) => {
    if (n2 == 0)
        throw 'Não é possível dividir por zero';

    return n1 / n2;
}