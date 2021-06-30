'use strict';

const myText = 'Hello prototype!';

console.log(myText.split('')); // <- de onde vem esse "split"?

/*
//Outra forma

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
*/