let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) { // pega a propriedade do array.
    console.log(i);     // logs "0", "1", "2", "foo"
}

for (let i of arr) {    // retorna os valores númericos do array.
    console.log(i);     // logs "3", "5", "7"
}