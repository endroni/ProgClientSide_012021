/* 2. Calcular a média final (usando a ponderação da UFRN) dadas as notas das 3 provas e produzir uma saída com a média e a situação do aluno de acordo com o seguinte critério:  .

média >= 7, aprovado;
5 < média < 7, recuperação;
média < 5, reprovado

*/

let prova1, prova2, prova3, media;

prova1 = 10;
prova2 = 10;
prova3 = 20;

media = (prova1 + prova2 + prova3) / 3;

if (media >= 0 && media < 5 ) {
    console.log("REPROVADO");
} else if ( media >= 5 && media < 7 ) {
    console.log("RECUPERAÇÃO");
} else if (media >= 7 && media <= 10 ) {
    console.log("APROVADO");
} else {
    console.log("DADOS INCORRETOS");
}

