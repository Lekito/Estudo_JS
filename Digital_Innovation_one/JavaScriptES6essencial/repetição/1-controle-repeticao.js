// break
console.log('Exemplo da utilidade de break');

var index = 0;

while (true) {
    index++;

    if (index > 2) {
        break;
    }

    console.log(index);
}

// Continue
console.log('\n Exemplo da utilização de continue');
const array = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue; //pula o elemento que da true no if.
    }

    console.log(element);
}