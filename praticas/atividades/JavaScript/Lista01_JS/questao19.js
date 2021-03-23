/*19. Ler 4 números inteiros e calcular a soma dos que forem par. */

let somaPar = function(a,b,c,d) {
    let soma = 0;
    if ((a%2) == 0) {
        soma += a;
    } if ((b%2) == 0) {
        soma += b;
    } if ((c%2) == 0) {
        soma += c;
    } if ((d%2) == 0) {
        soma += d;
    }
    return soma;
}

console.log("A soma dos números pares dá:", somaPar(2,3,2,3));