// Vereica se o valor do array é par ou ímpar.

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
    } else {
        console.log(`O número é ${item} é ímpar.`);
    }
});