import promptSync from 'prompt-sync';
import fetch from 'node-fetch';
import 'dotenv/config';

import { readLatAndLon } from "./quinta.js";

const scanner = promptSync();

main();

async function main() {
    while (true) {
        console.log('SELECIONE UMA OPÇÃO:');
        console.log('1 - Digitar latitude e longitude');
        console.log('2 - Sair');

        const chosenOption = +(scanner("> "));

        if (chosenOption === 2) {
            break;
        } else if (chosenOption !== 1) {
            console.log("Opção inválida, tente novamente!\n");
            continue;
        }

        const [lat, lon] = readLatAndLon();

        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`);
        const json = await resp.json();
        console.log(`\nTEMPERATURA: ${json.main.temp}ºC\n`);
    }
}