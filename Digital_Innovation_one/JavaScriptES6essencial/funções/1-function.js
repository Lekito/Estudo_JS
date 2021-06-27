function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';

const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here';
}

// Funções também são Objetos
fn.prop = 'Posso criar propriedades'; // criando um atributo na função fn

console.log(fn());
console.log(fn.prop); // não é comum fazer isso 


// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar Funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution();     // Não executará a função fn

/*
// constrolFnExec como função fn
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}

*/