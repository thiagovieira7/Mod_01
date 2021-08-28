const prompt = require("prompt-sync")();

let rodadas = prompt("informe quantas rodadas deseja jogar: ");

console.log(j1random);

let jogo;
let jogoResultComp = 0;
let jogoResultUser = 0;
for (jogo = 0; jogo < rodadas; jogo++) {
    let jesc = prompt("Escolha PEDRA, PAPEL ou TESOURA: ")

    let j1 = ["PEDRA", "PAPEL", "TESOURA"];

    let j1random = j1[Math.floor(Math.random() * j1.length)]; 
}
        