/* Se você passar um objeto (ou seja, um  valor não primitivo, tal como Array ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função, conforme mostrado no exemplo a seguir:
*/
function minhaFuncao(objeto) {
    objeto.make = 'Toyota';
}

var meucarro = {make: 'Honda', model: 'Accord', year: 1998}
var x, y;

console.log(meucarro)
x = meucarro.make;
console.log(x); // mostra na tela o valor de x que é 'Honda'

minhaFuncao(meucarro);
y = meucarro.make; // y recebe o valor 'Toyota'
console.log(y);
console.log(meucarro);
