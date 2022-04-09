const prompt = require('prompt-sync');
const scanner = prompt();

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

const possibleOperations = [1, 2, 3, 4];

while (true) {
    console.log('SELECIONE UMA OPÇÃO:');
    console.log('1 - SOMA');
    console.log('2 - SUBTRACAO');
    console.log('3 - MULTIPLICACAO');
    console.log('4 - DIVISAO');
    console.log('5 - SAIR');

    const chosenOption = +(scanner("> "));

    if (possibleOperations.includes(chosenOption)) {
        const chosenNumbers = readNumbers();
        const result = operacoes[chosenOption](chosenNumbers[0], chosenNumbers[1]);
        console.log(`Resultado: ${result}\n`);
    } else if(chosenOption == 5) {
        break;
    } else {
        console.log("Opção inválida, tente novamente!\n");
    }
    

    // if (chosenOption == 1) {
    //     const chosenNumbers = readNumbers();
    //     const result = operacoes.chosenOption(chosenNumbers[0], chosenNumbers[1]);
    //     console.log(`Resultado: ${result}\n`);
    // } else if (chosenOption == 2) {
    //     const chosenNumbers = readNumbers();
    //     const result = operacoes.subtracao(chosenNumbers[0], chosenNumbers[1]);
    //     console.log(`Resultado: ${result}\n`);
    // } else if (chosenOption == 3) {
    //     const chosenNumbers = readNumbers();
    //     const result = operacoes.multiplicacao(chosenNumbers[0], chosenNumbers[1]);
    //     console.log(`Resultado: ${result}\n`);
    // } else if(chosenOption == 4) {
    //     const chosenNumbers = readNumbers();
    //     const result = operacoes.divisao(chosenNumbers[0], chosenNumbers[1]);
    //     console.log(`Resultado: ${result}\n`);
    // } 
}

function readOption() {

}

function readNumbers() {
    while (true) {
        const n1 = +(scanner("Digite o primeiro número: "));
        const n2 = +(scanner("Digite o segundo número: "));

        if (isNaN(n1) || isNaN(n2)) {
            console.log("É necessário digitar números válidos, tente novamente!");
            continue;
        }

        return [n1, n2];
    }
}