const prompt = require("prompt-sync")();
/* 6 - Faça um programa que tenha uma função chamada área (), que receba as dimensões de um terreno retangular (largura e comprimento) 
e mostre a área do terreno: */

const ld1 = prompt("Informe o comprimento do terreno em metros: ");
const ld2 = prompt("Informe a largura do terreno em metros: ");

console.log("\nA área total do terreno é: " + ld1 * ld2 + " m².");
