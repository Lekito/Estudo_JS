// O Array também é um objeto

const user = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme', // name, age e gender são atributos do objeto persons.
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }

];

// Retorna a quantidade de itens de um array 
console.log('Itens: ', persons.length);

// Verificar se é array 
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => { // 'forEach'-> para cada itens executa uma função.
    console.log(`Nome ${person.name}, index: ${index}, `, arr);
});

// Filtrar array 
const mens = persons.filter(person => person.gender === gender.MAN); // filter -> é uma função que respeita o conseito de imutabilidade. Ele filtra retornando um novo objeto. filter é uma condicional.
console.log('\n Nova lista apenas com homens: ', mens);

// Retornar um novo objeto
const personsWithCourse = persons.map(person => { // a função 'map' também não altera o array original, ou seja, também cria um novo array adicionando a mudança desejada.
    person.course = 'Introdução ao JavaScript'; // adicionando uma nova propriedade no objeto 'persons'
    return person;
});

console.log('\n Pessoas com a adição do course: ', personsWithCourse);

// Transforma um array em outro tipo.
const totalAge = persons.reduce((age, person) => { // a função reduce também respeita o conseito de imutabilidade e não altera o array original. 
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idade das pessoas ', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\n Soma de idades das pessoas que possuem idade par ', totalEvenAges);