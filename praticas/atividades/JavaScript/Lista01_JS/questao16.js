/* 16. Ler três valores e colocá-los em ordem crescente. */

let ordem = function(valor1, valor2, valor3) {

    if( (valor1 > valor2) && (valor2 > valor3)) {
        return `${valor1} > ${valor2} > ${valor3}`;
    } else if ((valor1 > valor3) && (valor3 > valor2)) {
        return `${valor1} > ${valor3} > ${valor2}`
    } else if ((valor2 > valor1) && (valor1 > valor3)) {
        return `${valor2} > ${valor1} > ${valor3}`
    } else if ((valor2 > valor3) && (valor3 > valor1)) {
        return `${valor2} > ${valor3} > ${valor1}`
    }
    else {
        return `${valor3} > ${valor2} > ${valor1}`;
    }
}

console.log(ordem(2,3,1));