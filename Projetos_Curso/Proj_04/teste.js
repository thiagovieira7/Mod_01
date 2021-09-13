const prompt = require("prompt-sync")();

let novoVoto = "SIM";

votoCand = {
    candidato_1: 0,
    candidato_2: 0,
    candidato_3: 0,
    voto_Nulo: 0,
    voto_Em_Branco: 0,
};

function autorizaVoto(anoNascimento) {
    const ano = new Date();
    const anoCorrente = ano.getFullYear();
    let idade = anoCorrente - anoNascimento;

    if (idade == 16 && idade < 18) {
        return "VOTO OPCIONAL";
    } else if (idade >= 18 && idade < 70) {
        return "VOTO OBRIGATORIO";
    } else {
        return "VOTO NEGADO";
    }
}

let anoUser = +prompt("Informe o seu ano de nascimento: ");
let autorizacaoUsuario = autorizaVoto(anoUser);
console.log(`${autorizacaoUsuario}`);

function votacao(autorizacao, voto) {
    if (autorizacao == "VOTO OPCIONAL" || autorizacao == "VOTO OBRIGATORIO") {
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
    } else {
        console.log("Você não pode votar...");
    }
}

while (novoVoto == "SIM") {
    let CanditLista = [
        "nº- Nome",
        "--------------------",
        "1 - Candidato 1",
        "2 - Candidato 2",
        "3 - Candidato 3",
        "4 - Voto Nulo",
        "5 - Voto em Branco",
    ];
    console.log(CanditLista);
    let votarCandidato = +prompt("Informe o numero do candidato: ");
    votacao(autorizacaoUsuario, votarCandidato);
    console.log(votoCand);
    console.log("------------------------------------");
    novoVoto = prompt("Deseja inserir novo voto? ");
    console.log("------------------------------------");
    novoVoto = novoVoto.toUpperCase();
}

console.log("\nFim da votação...\n");

function exibirResultados() {
    console.log("------------------------------------------------------------");
    console.log("Candidato 1 = " + `${votoCand.candidato_1}` + " votos");
    console.log("Candidato 2 = " + `${votoCand.candidato_2}` + " votos");
    console.log("Candidato 3 = " + `${votoCand.candidato_3}` + " votos");
    console.log("Votos nulos = " + `${votoCand.voto_Nulo}` + " votos");
    console.log(
        "Votos em branco  = " + `${votoCand.voto_Em_Branco}` + " votos",
    );
    console.log("------------------------------------------------------------");
}

exibirResultados(votoCand);
