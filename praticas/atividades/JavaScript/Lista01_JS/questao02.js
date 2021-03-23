/* 2. Calcular a média final (usando a ponderação da UFRN) dadas as notas das 3 provas e produzir uma saída com a média e a situação do aluno de acordo com o seguinte critério: média >= 7, aprovado; 5 < média < 7, recuperação; média < 5, reprovado. */

var nota1, nota2, nota3, media, resultado;
nota1 = 7;
nota2 = 8.5;
nota3 = 9;

media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    resultado = "Reprovado"
} else if (media >= 5 && media < 7) {
    resultado = "Recuperação"
} else if (media >= 7) {
    resultado = "Aprovado"
}else {
    resultado = "Resultado fora do esperado"
}
console.log(resultado);
