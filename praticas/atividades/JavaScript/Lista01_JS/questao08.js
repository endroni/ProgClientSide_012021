/* 8. Leia a razão de uma PA (Progressão Aritmética) e o seu primeiro e último termos e informe a soma dos elementos dessa PA. 
{1,4,7,10,13}
Primeiro termo = 1
Ultimo termo = 13
razão = 3
*/

var razao = 3, a1 = 1, a5 = 13, termos = a1, soma = a1;

for (var i = 0; i < 4; i++) {
    termos += 3;
    soma += termos;
}

console.log(soma);