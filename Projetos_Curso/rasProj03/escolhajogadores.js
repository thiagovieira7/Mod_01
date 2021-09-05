// verificar esse for
const prompt = require("prompt-sync")();
let listasJogadores = [];
let jogadores = +prompt("Informe o numero de jogadores: ");

for (let i = 0; i < jogadores; i++) {
    var nome = prompt("digite um nome: ");
    let jogadorAtual = {
        nome: nome,
        dadosJog: +prompt("Escolha sua aposta: "),
    };

    listasJogadores.push(jogadorAtual);
    console.log(listasJogadores);
}


