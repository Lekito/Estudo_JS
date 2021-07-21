let user = {
    name: 'Alex'
}

console.log(user.name);

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user.name);

user['name'] = 'Outro nome 2';
console.log(user.name);

//Criando uma propriedade
user.lastName = 'Cabrini da Silva';
console.log(user);

// Deletando uma propriedade
delete user.name;
console.log(user);

// Adicionado uma propriedade
const prop = 'name';
user[prop] = 'Vinicius';


console.log(user);
