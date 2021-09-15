const prompt = require("prompt-sync")();

class Refeicao {
    // Todos os animais terão esses atributos.

    constructor(refeicao1) {
        this.refeicao1 = refeicao1;
    }
}

class RefeicaoEsuco extends Refeicao {
    constructor(refeicao1, suco) {
        super(refeicao1);
        this.suco = suco;
    }
}

let comida = new Refeicao(prompt("informe o que deseja comer: "));
let comidaComsuco = new RefeicaoEsuco(
    prompt("informe refeição: "),
    prompt(" informe o suco: "),
);

console.log(comida);
console.log(comidaComsuco);
