let valor = 42; // number
valor = "Hello"; // agora é uma string

console.log(valor);

function exemploVar() {
  var x = 10;
  if (true) {
    var x = 20; // Mesmo escopo, sobrescreve a variável
    console.log(x); // 20
  }
  console.log(x); // 20, pois `var` não respeita o escopo de bloco
}
exemploVar();

function exemploLet() {
  let y = 10;
  if (true) {
    let y = 20; // Escopo de bloco, não afeta o `y` fora do bloco
    console.log(y); // 20
  }
  console.log(y); // 10, pois o `let` respeita o escopo de bloco
}
exemploLet();

/*const nome = "Mariana"
  nome = "Ana"

  console.log(nome) */
