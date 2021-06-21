let valor1 = 25;
let valor2 = 145;
let valor3 = parseFloat(15.55);
let salary = parseFloat(1*1).toFixed(2);
let c = parseFloat(valor2*1).toFixed(2);
salary = (c * valor3).toLocaleString('en-US',{style: 'currency', currency: 'USD'});

console.log(`NUMBER = ${valor1}\n`);
console.log(`SALARY = ${salary}`);
