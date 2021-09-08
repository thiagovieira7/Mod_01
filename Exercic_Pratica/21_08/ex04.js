/* 4-  Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, caso escreva outra letra: Sexo Inválido. */
const prompt = require("prompt-sync")();

let genero = String(prompt("Informe o Gênero: "));
genero = genero.toUpperCase();
if (genero == "F") {
    console.log("F - Feminino");
} else if (genero == "M") {
    console.log("M - Masculino");
} else {
    console.log("INVALIDO");
}
