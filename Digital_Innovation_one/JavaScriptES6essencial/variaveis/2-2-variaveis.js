(() => { // A variável let respeita o escopo de bloco. 
    let test = 'valor da função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();