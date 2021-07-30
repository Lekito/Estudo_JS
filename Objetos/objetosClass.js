class Person {
    constructor(name) {
        this.name = name;
    }
}

class PessoaF extends Person {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}

const aluno = new PessoaF('Alex Ribeiro', 1449570000);

console.log(aluno);

