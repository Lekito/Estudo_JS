let valores = [8, 1, 7, 4, 2, 9]
for (let cont = 0; cont < valores.length; cont++) {
    console.log(`O vetor na ${cont} é = [${valores[cont]}]`)
}
valores.sort();
console.log(`Com a ordenação o vetor fica assim!`)
// Nova forma de usar vetor ou objetos.
for(let cont in valores) {
    console.log(`O vetor na ${cont} é = [${valores[cont]}]`)   
}