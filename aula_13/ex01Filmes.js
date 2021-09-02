//criar varios objetos com valores diferentes

const receber = require("prompt-sync")();
const filmes = [];

const qtd = receber("Digite quantos filmes voce quer cadastrar: ");

for (let i = 0; i < qtd; i++) {
    const filme = {};
    filme.nome = receber("Digite o nome do filme: ");
    filme.duracao = receber("Digite a duração do filme: ");
    filme.ano = receber("Digite o ano do filme: ");

    filmes.push(filme);
}

console.log(filmes);
