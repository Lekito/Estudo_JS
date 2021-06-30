function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Guilherme');

console.log(p);

//{ name: 'Guilherme' } -> __proto__ -> prototype -> constructor : f Pessoa(name) -> __proto__: Object