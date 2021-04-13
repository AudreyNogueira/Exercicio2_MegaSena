let x = 60

let z = 6

alert("Pesquise sobre a Mega Sena antes de começar")

let y = prompt("Insira a quantidade números que deseja jogar (entre 6 e 15)")


let valorProbabilidade = ((60 * 59 * 58 * 57 * 56 * 55) / (6 * 5 * 4 * 3 * 2 * 1))

if (y == 6) {
    document.write(valorProbabilidade)
}
else if (y == 7) {
    document.write((valorProbabilidade) / (y))
}
else if (y == 8) {
    document.write((valorProbabilidade / (28) | 0))
}
else if (y == 9) {
    document.write((valorProbabilidade / 84) | 0)
}
else if (y == 10) {
    document.write((valorProbabilidade / 210) | 0)
}
else if (y == 11) {
    document.write((valorProbabilidade / 462) | 0)
}
else if (y == 12) {
    document.write((valorProbabilidade / 924) | 0)
}
else if (y == 13) {
    document.write((valorProbabilidade / 1716) | 0)
}
else if (y == 14) {
    document.write((valorProbabilidade / 3003) | 0)
}
else if (y == 15) {
    document.write((valorProbabilidade / 5005) | 0)
}
else {
    alert("Leia as regras da Mega Sena acessando o site http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/")
}