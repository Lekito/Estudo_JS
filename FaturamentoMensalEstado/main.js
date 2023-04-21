const FaturamentoMensal = [
    { cidade: "SP", valor: 67836.43 },
    { cidade: "RJ", valor: 36678.66 },
    { cidade: "MG", valor: 29229.88 },
    { cidade: "ES", valor: 27165.48 },
    { cidade: "Outros", valor: 19849.53 }
]
let divConteiner = document.querySelector("#container")

console.log(FaturamentoMensal)

const totaValores = FaturamentoMensal.reduce((sum, value) => sum + value.valor, 0)

console.log("Percentual de cada estado é ")
FaturamentoMensal.map((value) => {
    console.log(value.cidade)
    divConteiner.innerHTML += `<li> Cidade: ${value.cidade} - valor percentual: ${(value.valor * 100 / totaValores).toFixed(2)
        } % </li >`
})



console.log(totaValores)