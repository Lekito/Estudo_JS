function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var foto = document.querySelector('div#imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                // Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if ( idade < 21){
                // Jovem
                img.setAttribute('src', 'adolescente-m.png')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'meiaIdade-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                // Criança
                img.setAttribute('src', 'bebe-f.png')
            } else if ( idade < 21){
                // Jovem
                img.setAttribute('src', 'adolescente-f.png')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'meiaIdade-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
    
}
