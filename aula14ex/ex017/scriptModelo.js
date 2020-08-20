function tabuada() {
    let cal = document.getElementById('calctxt');
    const fimCal = 10;
    let tab = document.getElementById('seltab');
    
    if(cal.value.length != ' '){
        let calculando = Number(cal.value);
        for(let cont = 1; cont <= fimCal ; cont++ ) {
            let item = document.createElement('option')
            item.text = `${cont} X ${calculando} = ${cont*calculando} `
            tab.appendChild(item)
        }
    } else {
        window.alert("Por favor! Digite um número!")
    }
    

}