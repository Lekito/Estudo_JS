const name = 'Alex';

// Não podemos alterar o valor
//name = 'Vitor';

const user = {
    name: 'Guilherme'
};

// Mas se for um objeto , podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer um objeto "apontar" para outro lugar
/*
user = {
    name: 'Guilherme'
};
*/
const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João');
console.log(persons);

//Podemos remover algum item
persons.shift();
console.log(persons);

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\n Array após as alterações: ', persons);
