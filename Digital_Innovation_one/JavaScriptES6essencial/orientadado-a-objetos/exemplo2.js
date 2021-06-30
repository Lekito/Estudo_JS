'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split); // retorna true

console.log(myText.constructor === String); // retorna true