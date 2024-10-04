let nome = prompt("Qual é o seu nome?");

let idade = prompt("Quantos anos você tem?");

idade = Number(idade);

if (!isNaN(idade)) {
    alert("Olá, " + nome + "! Você tem " + idade + " anos.");
} else {
    alert("Por favor, insira uma idade válida.");
}