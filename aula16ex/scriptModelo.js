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
        let item = document.createElement('option'); // cria o elemento 'option'
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item); // add o item na tela com filho do 'select' sendo uma opção dele.
        res.innerHTML = '';
         
    } else {
        window.alert('Valor invalido ou já encontrado na lista.');
    }
    num.value = ''; // limpar a caixa do texto.
    num.focus(); // voltar com o cursor para caixa onde o 'num' é criado. Dando um foco. Com o comando de cima + esse você não precisa apagar toda hora a caixa de texto para adicionar um novo número.
}

function finalizar() {
    if(vetorAdd.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = vetorAdd.length;
        let maior = vetorAdd[0];
        let menor = vetorAdd[0];
        let soma = 0;
        let media = 0;
        for(let pos in vetorAdd) {
            soma += vetorAdd[pos];
            if(vetorAdd[pos] > maior) {
                maior = vetorAdd[pos];
            } 
            if(vetorAdd[pos] < menor){
                menor = vetorAdd[pos];
            }
        }
        media = soma / vetorAdd.length;
        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos os números é ${soma}. </P>`
        res.innerHTML += `<p> A média é ${media}. </P>`

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