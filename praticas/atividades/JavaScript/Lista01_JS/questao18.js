/*18. Ler três valores do teclado e dizer se eles formam um triângulo. Caso afirmativo, dizer seu tipo (equilátero, isósceles ou escaleno). */

let triangulo = function(a,b,c) {
    
    if (!(a > ( b + c )) && (!(b > (a + c))) && (!(c > (a + b)))) {
        if (a == b && b == c) {            
            return `É um triangulo equilátero`
        } else if ((a == b) || (a == c) || (b == c)){
            return `É um triangulo isósceles`
        } else {
            return `É um triangulo escaleno`
        }       
    } else {
        return "não é um triangulo"
    }
}

console.log(triangulo(2,3,4));