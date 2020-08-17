

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')
    
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        let iniCont = Number(ini.value)
        let fimCont = Number(fim.value)
        let passoCont = Number(passo.value)
        for (let c = iniCont; c <= fimCont; c+=passoCont) {
            resultado.innerHTML += `-> ${c} ` 
        } 
    
    }

}


/*
function contar(){
    var res = document.getElementById('resultado')
    res.innerHTML = `Outra mensagem `
}
*/