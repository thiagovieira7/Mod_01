/* 2.Faça um programa que leia nome e média de um aluno, guardando também a 
situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média 
para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso 
contrário é reprovado. */

const prompt = require("prompt-sync")();

console.log("MEDIA ALUNO");

const aluno = {};
aluno.nome = prompt("Informe o nome do Aluno: ");
aluno.nota = prompt("Informe a nota do Aluno: ");

if (aluno.nota >= 7) {
    console.log(
        "\nAluno: " +
            aluno.nome +
            "\nNota: " +
            aluno.nota +
            " \nALUNO APROVADO",
    );
} else if (aluno.nota >= 5) {
    console.log(
        "\nAluno: " +
            aluno.nome +
            "\nNota: " +
            aluno.nota +
            " \nALUNO EM RECUPERAÇÃO",
    );
} else {
    console.log(
        "\nAluno: " +
            aluno.nome +
            "\nNota: " +
            aluno.nota +
            " \nALUNO REPROVADO",
    );
}
