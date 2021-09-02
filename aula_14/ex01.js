/* 1. Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto. */

const prompt = require("prompt-sync")();

console.log("Venda chocolate");

let qtd = prompt("Informe a quantidade: ");

const produto = {
    nome: "chocolate",
    valor: 5.0,
    
};

if (qtd < 100.0)0 {
    console.log(
        "\nQuantidade total: " +
            qtd +
            "\nvalor unitario R$5,00" +
            "\nTotal de: R$" +
            qtd * produto.valor,
    );

} else if (qtd => 100.00) {
    console.log(
        "\nQuantidade total: " +
            qtd +
            "\nvalor unitario R$5,00" +
            "\nTotal de: R$" +
            qtd * produto.valor),

}
