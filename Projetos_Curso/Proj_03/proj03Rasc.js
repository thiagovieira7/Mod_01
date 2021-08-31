/* crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
Perguntar quantas rodadas você quer fazer
Criar um objeto pra cada jogador com nome e número tirado
Guarda todos os objetos em uma lista
Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado
Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. */

const prompt = require("prompt-sync")();

let rodadas = prompt("Quantas rodadas deseja jogar? ");

let jogadores = prompt("Quantos jogadores irão participar? ");
