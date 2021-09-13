const prompt = require("prompt-sync")();

let novoVoto = "SIM";

votoCand = {
    candidato_1: {
        nome: "Candidato 1",
        qtdVotos: 0,
    },
    candidato_2: {
        nome: "candidato 2",
        qtdVotos: 0,
    },
    candidato_3: {
        nome: "Candidato 3",
        qtdVotos: 0,
    },
};

votosBrancosNulos = {
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

function votacao(autorizacao, voto) {
    if (autorizacao == "VOTO OPCIONAL" || autorizacao == "VOTO OBRIGATORIO") {
        if (voto == 1) {
            votoCand.candidato_1.qtdVotos += 1;
        } else if (voto == 2) {
            votoCand.candidato_2.qtdVotos += 1;
        } else if (voto == 3) {
            votoCand.candidato_3.qtdVotos += 1;
        } else if (voto == 4) {
            votosBrancosNulos.voto_Nulo += 1;
        } else if (voto == 5) {
            votosBrancosNulos.voto_Em_Branco += 1;
        } else {
            console.log("\nNUMERO DO CANDIDATO INVALIDO\n");
        }
    } else {
        console.log("Você não pode votar...");
        process.exit(0);
    }
}

function exibirResultados() {
    console.log("------------------------------------------------------------");
    console.log(
        "Candidato 1 = " + `${votoCand.candidato_1.qtdVotos}` + " votos",
    );
    console.log(
        "Candidato 2 = " + `${votoCand.candidato_2.qtdVotos}` + " votos",
    );
    console.log(
        "Candidato 3 = " + `${votoCand.candidato_3.qtdVotos}` + " votos",
    );
    console.log("Votos nulos = " + `${votosBrancosNulos.voto_Nulo}` + " votos");
    console.log(
        "Votos em branco  = " +
            `${votosBrancosNulos.voto_Em_Branco}` +
            " votos",
    );
    console.log("------------------------------------------------------------");
    if (
        votoCand.candidato_3.qtdVotos > votoCand.candidato_2.qtdVotos &&
        votoCand.candidato_3.qtdVotos > votoCand.candidato_1.qtdVotos
    ) {
        console.log("CANDIDATO 03 VENCEU A VOTAÇÃO...\n");
    } else if (
        votoCand.candidato_2.qtdVotos > votoCand.candidato_1.qtdVotos &&
        votoCand.candidato_2.qtdVotos > votoCand.candidato_3.qtdVotos
    ) {
        console.log("CANDIDATO 02 VENCEU A VOTAÇÃO...\n");
    } else if (
        votoCand.candidato_1.qtdVotos > votoCand.candidato_2.qtdVotos &&
        votoCand.candidato_1.qtdVotos > votoCand.candidato_3.qtdVotos
    ) {
        console.log("CANDIDATO 01 VENCEU A VOTAÇÃO...\n");
    } else {
        console.log("EMPATE\n");
    }
}

let anoUser = +prompt("Informe o seu ano de nascimento: ");
let autorizacaoUsuario = autorizaVoto(anoUser);
console.log(`${autorizacaoUsuario}`);

votacao(autorizacaoUsuario);

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

    console.log("------------------------------------");
    novoVoto = prompt("Deseja inserir novo voto? ");
    console.log("------------------------------------");
    novoVoto = novoVoto.toUpperCase();
}

console.log("\nFim da votação...\n");
exibirResultados(votoCand);
