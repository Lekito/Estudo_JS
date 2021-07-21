const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);

// Retorna um número com um número de casas decimais 
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float 
console.log('\n String passada para float: ', parseFloat('13.20').toFixed(2));

// Transforma uma string em int
console.log('\n String passada para int: ', parseInt('13.20'));