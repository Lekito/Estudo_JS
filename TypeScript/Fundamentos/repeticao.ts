// Array

const array: Array<number> = [1, 2, 4, 3];

const stringArray: String[] = ['a', 'b', 'c']

console.log('Array original:', array);

array.push(5); // Adiciona no ultimo elemento
//array.pop(); // remove o ultimo elemento do array

console.log('Novo Array', array);

const buscaNum = array.find(num => num === 4);
const buscaNumM = array.find(num => num > 2); // vai encontrar o primeiro elemento maior que 2

console.log(buscaNum);
console.log("Primeiro numero maior que 2: ", buscaNumM);

console.log("Imprimir todos os elementos maiores do que 2:");

array.forEach(num => {
    if (num > 2) {
        console.log(num)
    }
})

console.log("Percorendo o array: ")
array.map(num => console.log(num));

// const num: number = 4;

// if (num > 15) {
//     console.log("Número maior que 15.");
// } else if (num === 15) {
//     console.log("Número igual a 15.");
// } else {
//     console.log("Número menor que 15.");
// }


// const typeUser = {
//     admin: "Seja bem vindo admin!",
//     student: "Você é um estudante.",
//     viewer: "Você pode visualizar!"
// }

// function validateUser(user: string) {
//     console.log(typeUser[user as keyof typeof typeUser]);
// }

// const usuario = "admin";

// validateUser(usuario);
// validateUser("student");
// validateUser("viewer");

// for (let i = 0; i < 5; i += 2) {
//     console.log(i);
// }