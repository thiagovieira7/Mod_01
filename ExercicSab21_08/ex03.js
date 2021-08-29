const prompt = require("prompt-sync")();
/* Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais. */

let num1 = +prompt("Informe o primeiro numero: ");
let num2 = +prompt("Informe o segundo numero: ");

if (num1 > num2) {
    console.log(num1 + " É o maior entre os dois valores.");
} else if (num1 < num2) {
    console.log(num2 + " É o maior entre os dois valores.");
} else {
    console.log(num1 + " e " + num2 + " são valores iguais...");
}
