const prompt = require("prompt-sync")();

let nome_Pernsonagem = prompt("Por favor insira o nome do personagem: ");

class Rotina_D1_casa {
    constructor(acordar, banheiro, cozinha, vestes) {
        this.acordar = acordar;
        this.banheiro = banheiro;
        this.cozinha = cozinha;
        this.vestes = vestes;
    }
}

class Rotina_D2_casa extends Rotina_D1_casa {
    constructor(acordar, banheiro, cozinha, vestes) {
        super("VERIFICAR");
    }
}

let acordar = prompt("Voce acordou, deseja levantar ou votar a dormir? ");
if (acordar == "LEVANTAR") {
    let depoisAcordar = prompt(
        "O que deseja fazer agora? (higiene pessoal, refeição matinal, trocar de roupa",
    );
    if (depoisAcordar == "higiene pessoal") {
        console.log("Escovando Dentes e iniciando banho...");
    } else if (depoisAcordar == "tomar cafe") {
        console.log("Iniciando refeição matinal...");
    } else if (depoisAcordar == "trocar de roupa") {
        console.log("Escolhendo roupas e se trocando....");
    } else {
        alert("opção invalida...");
    }
}
let acordar = acordar.toUpperCase;
let rotina1 = new Rotina_D1_casa("");
