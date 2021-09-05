//crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

const prompt = require("prompt-sync")();
let rodadas = +prompt("Quantas rodadas deseja jogar? ");
let numeroTotalJogadores = +prompt("informe a quantidade de jogadores: ");
let listaRodadas = [];
let listaNomeJogadores = [];

for (i = 0; i < numeroTotalJogadores; i++) {
    listaNomeJogadores.push(prompt("Informe o nome do jogador: "));
}

for (i2 = 0; i2 < rodadas; i2++) {
    console.log("\n Rodada " + (i2 + 1));
    console.log();
    let listaJogosDeJogadores = [];

    for (i = 0; i < numeroTotalJogadores; i++) {
        let numeroSorteioDados = Math.floor(Math.random() * 6 + 1);

        listaJogosDeJogadores.push({
            nome: listaNomeJogadores[i],
            numeroDado: numeroSorteioDados,
        });

        console.log(listaJogosDeJogadores[i].nome, numeroSorteioDados);
    }
    listaJogosDeJogadores.sort((a, b) => {
        if (b.numeroDado < a.numeroDado) {
            return -1;
        } else {
            return true;
        }
    });

    console.log("\nO vencedor da rodada é o " + listaJogosDeJogadores[0].nome);

    listaRodadas.push(listaJogosDeJogadores);
}

console.log(listaRodadas);
