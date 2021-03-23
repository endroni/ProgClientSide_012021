/* 15. Ler três valores e determinar o maior dentre eles. */

let maior = function(valor1,valor2,valor3) {
    let maior;
    if((valor1 > valor2) && (valor1 > valor3)) {
        maior = valor1;
    } else if (( valor2 > valor1 ) && (valor2 > valor3)) {
        maior = valor2;
    } else {
      maior = valor3  
    }
    return `${maior} é o maior`;
}

console.log(maior(3,1,2));