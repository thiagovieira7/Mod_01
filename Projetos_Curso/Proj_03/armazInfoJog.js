// Criar um objeto pra cada jogador com nome e número tirado;
//Guarda todos os objetos em uma lista;


const prompt = require("prompt-sync")();

let listasJogadores = [];
let jogadores = prompt("Informe o numero de jogadores: ");

for (let i = 0; i < jogadores; i++) {
    let jogadorAtual = {};
    (jogadorAtual.nome = prompt("digite um nome: ")),
        (jogadorAtual.aposta = prompt("Escolha sua aposta: ")),
        listasJogadores.push(jogadorAtual);
}
console.log(listasJogadores);