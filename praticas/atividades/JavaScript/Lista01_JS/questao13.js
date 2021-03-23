/*13. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo usuário). 
quantidadeLatao * porcentagem / 100
*/

let partes = function (quantidadeLatao) {
    let cobre = quantidadeLatao * 70 / 100;
    let zinco = quantidadeLatao * 30 / 100;

    return `${quantidadeLatao} kg de latão, correspondem à ${cobre}kg de cobre e ${zinco}kg de zinco`;
}

console.log(partes(20));