/* 17. Ler os três coeficientes de uma equação de segundo grau e determinar suas raízes. 
Delta = b*b -4 * a * c

*/

let delta = function(a,b,c){
    let delta = b * b - 4 * a * c;
    let x1 = (- b +  Math.sqrt(delta)) / (2 * a);
    let x2 = (- b -  Math.sqrt(delta))/ (2 * a);
    return `X1 = ${x1} . X2 = ${x2}`;
}

console.log(delta(2,-3,-5));