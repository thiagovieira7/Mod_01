const prompt = require("prompt-sync")();

let rodadas = prompt("informe quantas rodadas deseja jogar: ");

let jogoResultComp = 0;
let jogoResultUser = 0;

for (jogo = 0; jogo < rodadas; jogo++) {
    let jesc = prompt("Escolha PEDRA, PAPEL ou TESOURA: ");
    jesc = jesc.toUpperCase();
    let j1 = ["PEDRA", "PAPEL", "TESOURA"];

    let j1random = j1[Math.floor(Math.random() * j1.length)];

    if (j1random == "PEDRA" && jesc == "PAPEL") {
        jogoResultUser++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nPAPEL cobre PEDRA");
    } else if (j1random == "PAPEL" && jesc == "PEDRA") {
        jogoResultComp++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nPAPEL cobre PEDRA");
    } else if (j1random == "PEDRA" && jesc == "TESOURA") {
        jogoResultComp++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nPEDRA quebra TESOURA");
    } else if (j1random == "TESOURA" && jesc == "PEDRA") {
        jogoResultUser++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nPEDRA quebra TESOURA");
    } else if (j1random == "TESOURA" && jesc == "PAPEL") {
        jogoResultComp++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nTESOURA corta PAPEL");
    } else if (j1random == "PAPEL" && jesc == "TESOURA") {
        jogoResultUser++;
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nTESOURA corta PAPEL");
    } else {
        console.log("\nComputador escolheu: " + j1random);
        console.log("\nEMPATE");
    }
}

if (jogoResultComp > jogoResultUser) {
    console.log(
        "O Computador ganhou. Computador: " +
            jogoResultComp +
            " Jogador: " +
            jogoResultUser,
    );
} else if (jogoResultComp < jogoResultUser) {
    console.log(
        "O Jogador ganhou. Computador: " +
            jogoResultComp +
            " Jogador: " +
            jogoResultUser,
    );
} else if (jogoResultComp == jogoResultUser) {
    console.log(
        "Empate Computador: " + jogoResultComp + " Jogador: " + jogoResultUser,
    );
}
