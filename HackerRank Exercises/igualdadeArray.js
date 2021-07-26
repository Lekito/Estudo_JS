// Não terminei 

/* 
Há uma grande pilha de meias que devem ser combinadas por cores. Dada uma matriz de inteiros representando a cor de cada meia, determine quantos pares de meias com cores correspondentes existem.

Exemplo


Existe um par de cores  e um de cor . Restam três meias estranhas, uma de cada cor. O número de pares é.

Descrição da função

Complete a função sockMerchant no editor abaixo.

sockMerchant tem o (s) seguinte (s) parâmetro (s):

int n: o número de meias na pilha
int ar [n]: as cores de cada meia
Devoluções

int: o número de pares
Formato de entrada

A primeira linha contém um inteiro , o número de meias representadas em .
A segunda linha contém inteiros separados por espaço, , as cores das meias da pilha.

Restrições

 Onde 
Amostra de entrada

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Saída de amostra

3
*/

var listaNumeros = [2, 2, 4, 1, 5, 1, 2];
dupla = 0;


for (cont = 0; cont < listaNumeros.length; cont++) {
    if (listaNumeros[cont] == listaNumeros[cont + 1]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 1}] ${listaNumeros[cont]}`);
    }
    if (listaNumeros[cont] == listaNumeros[cont + 2]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 2}] ${listaNumeros[cont]}`);
    }
    if (listaNumeros[cont] == listaNumeros[cont + 3]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 3}] ${listaNumeros[cont]}`);
    }
    if (listaNumeros[cont] == listaNumeros[cont + 4]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 4}] ${listaNumeros[cont]}`);
    }
    if (listaNumeros[cont] == listaNumeros[cont + 5]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 5}] ${listaNumeros[cont]}`);
    }
    if (listaNumeros[cont] == listaNumeros[cont + 6]) {
        dupla++;
        console.log(`Posição [${cont}] = [${cont + 6}] ${listaNumeros[cont]}`);
    }
}
console.log(`O número de duplas = ${dupla}`);