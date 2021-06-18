var valores = [1,2,5,4];
soma = 0;

for(cont = 0; cont < valores.length; cont++){
    soma = soma + valores[cont];
    console.log(soma);
}

console.log(`A soma dos valores do Array = ${soma}.`);