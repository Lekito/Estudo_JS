// in vetorAdd
something in somethingItems
// isso exite em nissso.

// Array 
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;               // retorna true 
1 in arvores;               // retorna true
6 in arvores;               // retorna false
"cedro" in arvores;         // retorna false ( você deve especificar o número do índice, não o valor naquele índice)
"cedro" in arvores[2];      // retorna true
"length" in arvores;        // retorna true (length é uma propriedade de Array);

// Objetos predefinidos 
"PI" in Math;               // retorna true (PI esta dentro da função Math)
var minhaString = new String("coral");
"length" in minhaString;    // retorna true (a função length é propriedade do tipo string);

// Objetos personalizados 
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro;        // retorna true
"modelo" in meuCarro;       // retorna true


// instaceof (verifiaca se um objeto é instancia de um objeto.)
objeto instanceof tipoOpjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) { // retorna true (e vai executar o código abaixo)
    //Code here
}