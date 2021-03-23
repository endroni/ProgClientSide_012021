/* 11. Que gere o preço de um carro ao consumidor e os valores pagos pelo imposto e pelo lucro do distribuidor, sabendo o custo de fábrica do carro e que são pagos: 
a) de imposto: 45% sobre o custo do carro; 
b) de lucro do distribuidor: 12% sobre o custo do carro. */

let notaVeiculo = function (valorFabrica) {
    let imposto = valorFabrica * 45/100;
    let lucroDistribuidor = valorFabrica * 12/100;
    let valorFinal = valorFabrica + imposto + lucroDistribuidor; 
    return `Valor Fábrica: R$ ${valorFabrica.toFixed(2)} Impostos: R$ ${imposto.toFixed(2)} Valor Final: R$ ${valorFinal.toFixed(2)}`
}

console.log(notaVeiculo(15000));