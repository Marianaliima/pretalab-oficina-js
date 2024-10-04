let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

let nota = 100;

if (nota >= 90) {
    console.log("Aprovado com distinção.");
} else if (nota >= 70) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}

/*let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}*/

/*

Exemplo da importancia o else if
if (nota >= 90) {
    console.log("Aprovado com distinção.");
}
if (nota >= 70) {
    console.log("Aprovado."); // Este bloco será executado, mesmo que a primeira condição tenha sido verdadeira.
}
*/