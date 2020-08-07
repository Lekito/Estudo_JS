var agora = new Date()
//var diaSem = agora.getDay()
/* Para o JavaScript os dias da semana pegos pelo sistema são números.
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta 
    6 = Sábado
*/
var diaSem = 5

console.log('Qual é o dia da semana de hojé?')
switch(diaSem) {
    case 0:
        console.log('Hoje é domningo.')
        break
    case 1:
        console.log('Hoje é segunda.')
        break
    case 2: 
        console.log('Hoje é terça.')
        break
    case 3: 
        console.log('Hoje é quarta.')
        break
    case 4: 
        console.log('Hoje é quinta.')
        break
    case 5: 
        console.log('Hoje é sexta.')
        break
    case 6:
        console.log('Hoje é sábado.')
        break
    default: 
        console.log('[Erro] Dia invalido!')
        break
}