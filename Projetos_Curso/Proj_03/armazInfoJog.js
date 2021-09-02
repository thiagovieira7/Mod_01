// Criar um objeto pra cada jogador com nome e número tirado;
//Guarda todos os objetos em uma lista;

const prompt = require("prompt-sync")();

let jogadores = +prompt("Quantos jogadores irão participar? ");



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