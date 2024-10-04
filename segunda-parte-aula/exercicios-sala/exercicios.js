/*

Arrays (Resolvido) ->
Criar um array e imprimir elementos:
peça ao usuário para inserir 5 números, um de cada vez.
Armazene os números em um array e, em seguida, 
use um loop para imprimir cada número no console.

Arrays ->
Peça ao usuário para inserir 3 nomes de animais, um de cada vez.
Adicione um novo animal ao final do array e 
remova o primeiro animal. Imprima o resultado.


Array de objetos -> 

Peça ao usuário para inserir 3 nomes,
 idades e cidades de diferentes pessoas.
Crie um array de objetos e use um loop para
 imprimir o nome e a idade de cada pessoa.

 Funções (Resolvido)->
Peça ao usuário para inserir o título, autor e ano de um livro.
Escreva uma função que recebe o objeto do livro 
como argumento e imprime uma frase com as informações.


*/

/*const numeros = [];
for (let i = 0; i < 5; i++) {
    const numero = prompt("Digite um número:");
    numeros.push(numero);
}
console.log("Números inseridos:", numeros); */


const titulo = prompt("Digite o título do livro:");
const autor = prompt("Digite o autor do livro:");
const ano = prompt("Digite o ano do livro:");

const livro = {
    titulo: titulo,
    autor: autor,
    ano: ano
};

function exibirInformacoes(livro) {
    console.log(`O livro '${livro.titulo}' foi escrito por '${livro.autor}' em '${livro.ano}'.`);
}

exibirInformacoes(livro); 
