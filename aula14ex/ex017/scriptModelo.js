function tabuada() {
    let cal = document.getElementById('calctxt');
    const fimCal = 10;
    let tab = document.getElementById('seltab');
    
    if(cal.value.length != ' '){
        let calculando = Number(cal.value);
        tab.innerHTML = ''  // Comando para apagar a tabuada exitente, para fazer uma nova.
        for(let cont = 1; cont <= fimCal ; cont++ ) {
            let item = document.createElement('option') // criando um elemento ('option é uma opção do 'select')
            item.text = `${cont} X ${calculando} = ${cont*calculando} ` 
            tab.appendChild(item) // Comando para escrever na tela um elemto criado.
        }
    } else {
        window.alert("Por favor! Digite um número!")
    }
    

}