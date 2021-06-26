const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

// Recupera as chaves do objetos
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves
console.log('\n Valores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop];
console.log('\n Lista de propriedades e valores: ', Object.entries(user));


// Mergear propriedades do objeto 
Object.assign(user, { fullName: 'Guilherme Cabrine da Silva' });

console.log('\n Adiciona a propriedade fullName no objeto user: ', user.fullName);

// Cria um novo objeto apartir do 'objeto user'
console.log('\n Retorna um novo objeto mergeando 2 ou mais objetos', Object.assign({}, user, { age: 26 }, { city: 'Rio Grande do Sul' }));

console.log(user);

// Previne todas as alterações em um objeto 
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variável newObj após as alterações: ', newObj);


// Permite apenas a alteração de propriedades existentes em um objeto user
const person = { name: 'Guilherme' };
Object.seal(person);

person.name = 'Guilherem Cabrini';
delete person.name; //seal não permite isso!
person.age = 26; //seal não permite isso!

console.log('\n Variável person após as alterações: ', person);