/* 14. Ler 2 números inteiros do teclado. Se o segundo for diferente de zero, calcular e imprimir o quociente do primeiro pelo segundo. Caso contrário, imprimir a mensagem: “DIVISÃO POR ZERO”. */

let divisao = function(numero1, numero2) {
    if (numero2 != 0) {
        return numero1/numero2;
    } else {
        return "DIVISÃO POR ZERO"
    }    
}

console.log(divisao(10,2));