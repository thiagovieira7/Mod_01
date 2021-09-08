const prompt = require("prompt-sync")();
//02 Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.

let valor = prompt("Informe o valor: ");

if (valor > 0) {
    console.log(valor + " = O valor é positivo...");
} else if (valor < 0) {
    console.log(valor + " = O valor é negativo...");
} else {
    console.log(valor + " = O valor esta zerado...");
}
