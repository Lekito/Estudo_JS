function reverterString(palavra) {
    let novaPalavra = ""

    for (let i = palavra.length - 1; i >= 0; i--) {
        novaPalavra += palavra[i]
    }
    return novaPalavra
}

console.log(reverterString('Vou ser seu novo colega de equipe!'))

console.log(reverterString('arara'))