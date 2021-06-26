// Solidificando conhecimentos JavaScript

//Retorna o tamanho da String.
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\n Array com as posições separadas pelo delimitador ${splittedText}`);

// Busca por um valor  e substitui por outro 
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\n Substituição  de valor: ${replacedText}`);

// Retorna a 'fatia' de um valor
const lastChar = 'Alex'.slice(-1);
console.log(`\n  Última letra de uma string:`, lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\n Valor da String da primeira letra menos a última: ${allWithoutLastChar}`);

const secondToEnd = 'Texto'.slice(1);
console.log(`\n Valor da string da segunda letra até a última: ${secondToEnd}`);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirsPos = 'Texto'.substr(0, 2);
console.log(`\n As duas primeiras letras são: ${twoCharsBeforeFirsPos}`)

