const prompt = require("prompt-sync")();

/* let jogadores = +prompt("Quantos jogadores irão participar? ");

let listJogs = {};
const pessoas = [
    {
        nomeJog: "Maria",
        numTir: 30,
    },
];

for (let i = 0; i <= jogadores; i++) {
    console.log("Rodada");
    let jogador = {
        nome: prompt("digite um nome: "),
        dado: "",
    };
    console.log(jogador.nome);
}

let lista = [];
lista.push(prompt("digite algo: "));
//lista.push(prompt("digite algo: "));
//lista.push(prompt("digite algo: "));
console.log(lista);
 */
let jogadores = +prompt("informe a quantidade de jogadores: ");
let listajog = [];
for (i = 0; i < jogadores; i++) {
    let JogIndiv = {
        nome: prompt("Informe o nome do jogador: "),
    };
    listajog.push(JogIndiv);
}

