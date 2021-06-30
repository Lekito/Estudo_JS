function Pessoa(name) {
    this.name = name;

    return {
        name: 'Alex você é incrível!'
    }
}

const p2 = new Pessoa('Joaquim é incrível!');

console.log(p2); // retorna { name: 'Alex você é incrível!' }