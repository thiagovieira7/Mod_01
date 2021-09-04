const prompt = require("prompt-sync")();
let rodadas = +prompt("Quantas rodadas deseja jogar? ");
let jogadores = +prompt("informe a quantidade de jogadores: ");
let listajog = [];
for (i = 0; i < jogadores; i++) {
    let JogIndiv = {
        nome: prompt("informe o nome do jogador: "),
        listaJogada: []
    };
    listajog.push(JogIndiv);
}

for (i = 0; i < rodadas; i++) {
    console.log(rodadas);
    {
        for (i = 0; i < jogadores; i++) {
            let numDados = Math.floor(Math.random() * 6 + 1);
            console.log(numDados);

            listajog[i].listaJogada.push();
        }
    }
}

let numDados = Math.floor(Math.random() * 6 + 1);
console.log(numDados);

