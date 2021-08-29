const prompt = require("prompt-sync")();
/* 5 - Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.
 */


const number = prompt("Informe a nota do aluno: ");

if (number < 6) {
    console.log("Nota F");
} else if (number => 6 && number < 7) {
    console.log("Nota D");
} else if (number => 7 && number < 8) {
    console.log("Nota C");
} else if (number => 8 && number < 9) {
    console.log("Nota B");
} else {
    console.log("Nota A");
}
