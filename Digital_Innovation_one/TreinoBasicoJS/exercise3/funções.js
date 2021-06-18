function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0; // Usando variáveis globais 

// Obs.: Ou usa a variável local apagando a global, vici-versa. 
function validaIdade(idade){
    //var validar; Usando variáveis locais.
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual é sua idade?");
validaIdade(idade); // Usando variáveis globais
console.log(validar) // Usando variáveis globais
//console.log(validaIdade(idade));//    Usando variáveis locais

console.log(setReplace("Vai Japão", "Japão", "Brasil"))
console.log(soma(5,10));