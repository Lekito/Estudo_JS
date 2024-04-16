//Declarações de variáveis

let b: string = 'b';
let n: number = 2;
let x: boolean = true;

let m: string | number | boolean = 2; // Não indico escopo muito aberto para uma variável. Talvez é melhor ficar com JavaScript puro.
let j: any = 3; // Mesmo caso acima!

m = 'Nath';
m = false;
j = 'Jonatas';
j = true;



// Objetos e Interfaces
interface Pessoa {
    nome: string,
    idade: number,
    profissao: string | undefined
}

const pessoa: Pessoa = {
    nome: 'José',
    idade: 28,
    profissao: undefined
}

const outraPessoa: Pessoa = {
    nome: 'Alex',
    idade: 32,
    profissao: 'desenvolvedor'
}

const arrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]

const arrayPessoa2: Array<Pessoa> = [
    pessoa,
    outraPessoa,
]

const arrayNum: number[] = [
    1, 2, 3, 4
]

const arrayString: string[] = [
    '1', '2', '3'
]





/*
const soma = (a: number, b: number) => {
    console.log(a + b);
}

soma(2, 2);

soma(1, 7);
*/