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
    voto_Nulo: 4,
    voto_Em_Branco: 9,
};

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
        console.log("CANDIDATO 03 VENCEU A VOTAÇÃO...");
    } else if (
        votoCand.candidato_2.qtdVotos > votoCand.candidato_1.qtdVotos &&
        votoCand.candidato_2.qtdVotos > votoCand.candidato_3.qtdVotos
    ) {
        console.log("CANDIDATO 02 VENCEU A VOTAÇÃO...");
    } else if (
        votoCand.candidato_1.qtdVotos > votoCand.candidato_2.qtdVotos &&
        votoCand.candidato_1.qtdVotos > votoCand.candidato_3.qtdVotos
    ) {
        console.log("CANDIDATO 01 VENCEU A VOTAÇÃO...");
    } else {
        console.log("EMPATE");
    }
}

exibirResultados(votoCand);
