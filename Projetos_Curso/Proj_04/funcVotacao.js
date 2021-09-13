//concluido

const prompt = require("prompt-sync")();

let novoVoto = "SIM";
let votoConta = [];

votoCand = {
    candidato_1: 0,
    candidato_2: 0,
    candidato_3: 0,
    voto_Nulo: 0,
    voto_Em_Branco: 0,
};

function votacao(autorizacao, voto) {
    autorizacao == "VOTO OPCIONAL" || autorizacao == "VOTO OBRIGATORIO";
    if (voto == 1) {
        votoCand.candidato_1 += 1;
    } else if (voto == 2) {
        votoCand.candidato_2 += 1;
    } else if (voto == 3) {
        votoCand.candidato_3 += 1;
    } else if (voto == 4) {
        votoCand.voto_Nulo += 1;
    } else if (voto == 5) {
        votoCand.voto_Em_Branco += 1;
    } else {
        console.log("\nNUMERO DO CANDIDATO INVALIDO\n");
    }
}

while (novoVoto == "SIM") {
    let votarCandidato = +prompt("Informe o numero do candidato: ");
    let retornoVoto = votacao("VOTO OBRIGATORIO", votarCandidato);
    console.log(votoCand);
    console.log("------------------------------------");
    novoVoto = prompt("Deseja inserir novo voto? ");
    console.log("------------------------------------");
    novoVoto = novoVoto.toUpperCase();
}

console.log("\nFim da votação...\n");
