import promptSync from 'prompt-sync';
import fetch from 'node-fetch';
import 'dotenv/config';

const scanner = promptSync();

main();

function main() {
    console.log('SELECIONE UMA OPÇÃO:');
    console.log('1 - Digitar latitude e longitude');
    console.log('2 - Sair');

    const chosenOption = +(scanner("> "));

    if (chosenOption === 2) {
        return;
    } else if (chosenOption !== 1) {
        console.log("Opção inválida, tente novamente!\n");
        main();
    }

    const [lat, lon] = readLatAndLon();
    const fetchTask = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`,)
        .then(resp => {
            resp.json()
                .then(x => {
                    console.log(`\nTEMPERATURA: ${x.main.temp}ºC\n`)
                    main();
                });
        })
        .catch(err => console.log('deu ruim'))
}

export function readLatAndLon() {
    while (true) {
        const lat = +(scanner("Digite a latitude: "));
        const lon = +(scanner("Digite a longitude: "));

        if (!(isNaN(lat) || isNaN(lon))) {
            return [lat, lon];
        }

        console.log("É necessário digitar números válidos, tente novamente!");
    }
}