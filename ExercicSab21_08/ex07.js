const prompt = require("prompt-sync")();
/* 7- Faça um programa que tenha uma função chamada voto () que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições: */

let ano = prompt("Informe o ano de nascimento: ");
let verificaAno = 2021 - ano;
//console.log(verificaAno);
if (verificaAno < 16) {
    console.log(verificaAno + " ANOS" + " \nVOTO NEGADO");
} else if (verificaAno => 16 && verificaAno <= 17) {
    console.log(verificaAno + " ANOS" + " \nVOTO OPCIONAL");
} else {
    console.log(verificaAno + " ANOS" + " \nVOTO OBRIGATORIO");
}
