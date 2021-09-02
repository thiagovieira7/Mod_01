// para comparar resultados

let numDados1 = [1, 2, 3, 4, 5, 6];


let numDadosA = numDados1[Math.floor(Math.random() * 6)];


console.log(numDadosA);

//estrutura acima é a estrutura anterior sorteio de dados

let numJogResult = 0;

if (numDadosA == numJog){
    numJogResult++;
    console.log("Jogador escolheu " +numJog+ " e resultado dos dados é "+numDadosA);
    
} else if ()

// verificar esse for
let listasJogadores = [];
let jogadores = ("Informe o numero de jogadores: ");

for (let i = 0; i <= jogadores; i++) {
    
    let jogadorAtual ={}
    jogadorAtual.nome = prompt("digite um nome: "),
    dadosJog = prompt("Escolha sua aposta: "),
    listasJogadores.push(jogadorAtual)
  
    
}

console.log(jogador.nome);




//verificar exemplo

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
