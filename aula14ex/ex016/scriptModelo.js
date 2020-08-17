

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')
    
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        resultado.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        let iniCont = Number(ini.value)
        let fimCont = Number(fim.value)
        let passoCont = Number(passo.value)
        
        if (passoCont <= 0) {
            // Corrigindo o erro do passo 0 ou negativo.
            window.alert('Passo inválido! Considerando PASSO 1')
            passoCont = 1
        }
        if(iniCont < fimCont) {
            // Contagem crescente 
            for (let c = iniCont; c <= fimCont; c+=passoCont) {
                resultado.innerHTML += ` ${c}  \u{1F449}` 
            } 
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem decrescente
            for (let c = iniCont; c >= fimCont; c-=passoCont) {
                resultado.innerHTML += ` ${c}  \u{1F449}` 
            } 
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    
    }

}


/*
function contar(){
    var res = document.getElementById('resultado')
    res.innerHTML = `Outra mensagem `
}
*/