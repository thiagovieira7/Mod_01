/* 1. Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto. */

const prompt = require("prompt-sync")();

console.log("Venda chocolate");

//let qtd = prompt("Informe a quantidade: ");

const produto = {};
produto.nome = "chocolate";
produto.valor = +prompt("informe o valor: ");
produto.qtd = +prompt("Informe a quntidade: ");
produto.desc01 = 0.1;
produto.desc02 = 0.15;
produto.desc03 = 0.2;

if (produto.qtd <= 100.0) {
    let totalg = produto.qtd * produto.valor;
    console.log("1°");
    console.log(
        "\nQuantidade total: " +
            produto.qtd +
            "\nvalor unitario R$" +
            produto.valor.toFixed(2) +
            "\nTotal de: R$" +
            totalg.toFixed(2),
    );
} else if (produto.qtd > 100.0 && produto.qtd < 400) {
    console.log("2°");
    let qtl = produto.qtd * produto.valor;
    let qdes = qtl * produto.desc01;
    let totalg = qtl - qdes;
    console.log(
        "\nQuantidade total: " +
            produto.qtd +
            "\nvalor unitario R$" +
            produto.valor.toFixed(2) +
            "\nTotal de: R$" +
            totalg.toFixed(2),
    );
} else if (produto.qtd >= 400 && produto.qtd <= 500) {
    console.log("3°");
    let qtl = produto.qtd * produto.valor;
    let qdes = qtl * produto.desc02;
    let totalg = qtl - qdes;
    console.log(
        "\nQuantidade total: " +
            produto.qtd +
            "\nvalor unitario R$" +
            produto.valor.toFixed(2) +
            "\nTotal de: R$" +
            totalg.toFixed(2),
    );
} else {
    console.log("4°");
    let qtl = produto.qtd * produto.valor;
    let qdes = qtl * produto.desc03;
    let totalg = qtl - qdes;
    console.log(
        "\nQuantidade total: " +
            produto.qtd +
            "\nvalor unitario R$" +
            produto.valor.toFixed(2) +
            "\nTotal de: R$" +
            totalg.toFixed(2),
    );
}
