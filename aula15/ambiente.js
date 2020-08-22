let num = [5,3,2,5,4];
console.log(`Nosso vetor é ${num}.`)
console.log(`Nosso vetor tem ${num.length} posições.`)
num[5] = 8 // inserindo um valor dendro do vetor.
num.push(7) // inserindo um valor sem precisar dizer o indice.
console.log(num)
num.length // conta o tamanho do vetor.
num.sort()
console.log(num)
console.log(`Agora o vetor tem ${num.length} posições`)
console.log(`O primeiro elemento ${num[0]}.`)