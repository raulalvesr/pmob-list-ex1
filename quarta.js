import {operacoes} from "./terceira.js";
import promptSync from 'prompt-sync';

const scanner = promptSync();

const possibleOperations = new Map([
    [1, operacoes.soma],
    [2, operacoes.subtracao],
    [3, operacoes.multiplicacao],
    [4, operacoes.divisao]
]);

while (true) {
    console.log('SELECIONE UMA OPÇÃO:');
    console.log('1 - SOMA');
    console.log('2 - SUBTRACAO');
    console.log('3 - MULTIPLICACAO');
    console.log('4 - DIVISAO');
    console.log('5 - SAIR');

    const chosenOption = +(scanner("> "));

    if (chosenOption === 5) {
        break;
    } else if (possibleOperations.has(chosenOption)) {
        const chosenNumbers = readNumbers();
        const result = possibleOperations.get(chosenOption)(...chosenNumbers);
        console.log(`\nRESULTADO: ${result}\n`);
    } else {
        console.log("Opção inválida, tente novamente!\n");
    }
}

function readNumbers() {
    while (true) {
        const n1 = +(scanner("Digite o primeiro número: "));
        const n2 = +(scanner("Digite o segundo número: "));

        if (!(isNaN(n1) || isNaN(n2))) {
            return [n1, n2];
        }

        console.log("É necessário digitar números válidos, tente novamente!");
    }
}