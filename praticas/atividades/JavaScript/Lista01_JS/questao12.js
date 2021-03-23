/* 12. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são pagos: 
a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida 
(ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. 
c) 200 reais, se estiver acima de 31km/h da velocidade permitida. */

let multa = function(velocidadeMaxima, velocidadeCarro) {
    if (velocidadeCarro > velocidadeMaxima) {
        
        let diferencaVelocidade = velocidadeCarro - velocidadeMaxima;
        let multa;

        if (diferencaVelocidade >= 1 && diferencaVelocidade <=10) {
            multa = 50;
        } else if (diferencaVelocidade > 10 && diferencaVelocidade <= 30) {
            multa = 100;
        } else {
            multa = 200;
        }
        return `Condutor a ${diferencaVelocidade}Km/h acima do permidito. Multado em R$${multa.toFixed(2)}`;
    } else {
        return "USE O CINTO!";
    }
}

console.log(multa(60, 100));