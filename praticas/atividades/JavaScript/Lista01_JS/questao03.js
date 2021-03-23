/* 3. Calcular a quantidade dinheiro gasta por um fumante. Dados: o número de anos que ele fuma, o número de cigarros fumados por dia e o preço de uma carteira. */

var anos, qtdCigarrosDia, precoCarteira, prejuTotal, valorUnitarioCigarro;

anos = 10;
qtdCigarrosDia = 5;
precoCarteira = 7.50;

valorUnitarioCigarro = 7.50/20;

prejuTotal = valorUnitarioCigarro * qtdCigarrosDia * (anos * 365);

console.log(prejuTotal);