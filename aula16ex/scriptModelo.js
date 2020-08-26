let num = document.getElementById('fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let vetorAdd = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) !=  -1) {
        return true;
    } else {
        return false;
    }
}


function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, vetorAdd)) {
        vetorAdd.push(Number(num.value)); // add o 'num ' na lista
        let item = document.createElement('option') // cria o elemento 'option'
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // add o item na tela com filho do 'select' sendo uma opção dele.
         
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}




/*
function adicionar() {
    let n1 = Number(valor.value);
    const TAM = 100;
    if(n1 == '') {
        alert('Valor invalido! Revise o número antes de adicionar!')
    } else {
        if(n1 >= 0 && n1 <= 100) {
            for(let cont in vetorAdd){
                let item = document.createElement('option');
                item.text = `${n1}`;
                item.value = `notasel${cont}`;
                notasel.appendChild(item);
            }
        } else {
            alert('Valor invalido! Revise o número antes de adicionar!')
        }
    }
    
}

function finalizar() {
    alert('Finalizou!')
}
*/