'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(`Cachorro tem ${cachorro.qtdePatas} patas.`);

console.log(`cachorro.__proto__ === Animal.prototype ? ${cachorro.__proto__ === Animal.prototype}`); // retorna true

console.log(Animal.__proto__ === Function.prototype); // retorna true
