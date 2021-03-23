/* 20. Que informe se um dado ano é ou não bissexto. Obs: um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100. */

let anoBissexto = function(ano) {
    if (( (ano%400) == 0) || ((ano%4) == 0) || ((ano%100) == 0) ) {
        return `${ano} é bissexto`;
    } else {
        return `${ano} não é bissexto`
    }         
}

console.log(anoBissexto(2000));