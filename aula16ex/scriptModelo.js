let valor = document.getElementById('addNumber')
let notasel = document.getElementById('selAnalise')

function adicionar() {
    let n1 = Number(valor.value);
    let vetorAdd = []
    const TAM = 100
    if(n1 == '') {
        alert('Valor invalido! Revise o número antes de adicionar!')
    } else {
        if(n1 >= 0 && n1 <= 100) {
            for(let cont in vetorAdd){
                let item = document.createElement('option')// parei aqui. Vou adicinonar os elementos no select.

            }
        } else {
            alert('Valor invalido! Revise o número antes de adicionar!')
        }
    }
    
}

function finalizar() {
    alert('Finalizou!')
}
