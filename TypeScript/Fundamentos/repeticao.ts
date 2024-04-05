const num: number = 4;

if (num > 15) {
    console.log("Número maior que 15.");
} else if (num === 15) {
    console.log("Número igual a 15.");
} else {
    console.log("Número menor que 15.");
}


const typeUser = {
    admin: "Seja bem vindo admin!",
    student: "Você é um estudante.",
    viewer: "Você pode visualizar!"
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

const usuario = "admin";

validateUser(usuario);
validateUser("student");
validateUser("viewer");

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}