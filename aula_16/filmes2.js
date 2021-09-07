// respossavel pela criacao dos objetos
const prompt = require("prompt-sync")();
class Filmes {
    constructor() {
        this.titulo = "";
        this.ano = 0;
        this.genero = "";
        this.diretor = "";
        this.atores = [];
        this.duracao = 0;
    }

    Reproduzir() {
        console.log("Reproduzir o filme...");
    }
    Pausar() {
        console.log("Pausado || ");
    }
    Avancar() {
        console.log("Avançar >> ");
    }
    Fechar() {
        console.log("Fechar X ");
    }
}
//instanciando(criando) nosso objeto
//esse metodo é mais pratico utilizando o prompt perguntando para o usuario as informações (preencha) campos com base na classe
// let click = new Filmes();
// click.titulo = "Click";
// click.ano = 2006;
// click.genero = "Comedia";
// click.diretor = " Frank Coraci";
// click.atores = ["Adam Sandler", "Kate Beckinsale", "Chistopher Walken"];
// click.duracao = 107;

console.log(click);
//criando nossos metodos
click.Reproduzir();
click.Pausar();
click.Avancar();
click.Fechar();

let click = new Filmes();
click.titulo = String(prompt("Digite o titulo do filme: "));
click.ano = parseInt(prompt("Digite o ano do filme: "));
click.genero = String(prompt("Digite o genero do filme: "));
click.diretor = String(prompt("Digite o diretor do filme: "));
click.atores.push(String(prompt("Digite os atores do filme: ")));
click.duracao = parseInt(prompt("Digite a duracao do filme: "));

console.log(click);
