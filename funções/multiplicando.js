// Função que recebe um número como parametro para fazer a multiplicação, mas não altera esse parametro!
function square(numero) {
    return console.log(numero * numero);
}
let numero = 4;
square(numero);
console.log(numero);

/* Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.
*/