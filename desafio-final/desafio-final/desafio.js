/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

const rankings = {};

function calcularMedalhas() {
    while (true) {
        const pais = prompt("Digite o nome do país ou 'sair' para encerrar:");
        if (pais.toLowerCase() === 'sair') {
            break;
        }

        const ouro = parseInt(prompt(`Digite o número de medalhas de ouro de ${pais}:`)) || 0;
        const prata = parseInt(prompt(`Digite o número de medalhas de prata de ${pais}:`)) || 0;
        const bronze = parseInt(prompt(`Digite o número de medalhas de bronze de ${pais}:`)) || 0;

        const totalMedalhas = ouro + prata + bronze;
        rankings[pais] = totalMedalhas;
    }

    exibirRanking();
}

function exibirRanking() {
    console.log("#Ranking de medalhas:");
    for (const pais in rankings) {
        console.log(`#${pais}: ${rankings[pais]} medalhas`);
    }
}

calcularMedalhas();
