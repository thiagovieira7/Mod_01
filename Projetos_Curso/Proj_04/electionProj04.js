const prompt = require("prompt-sync")();

function autorizaVoto(anoNascimento) {
    let idade = 2021 - anoNascimento;

    if ((idade == 16) & (idade < 18)) {
        return "VOTO OPCIONAL";
    } else if (idade >= 18 && idade < 70) {
        return "VOTO OBRIGATORIO";
    } else {
        return "VOTO OPCIONAL";
    }
}

let anoUser = +prompt("Informe o seu ano de nascimento: ");
let idade_usuario = autorizaVoto(anoUser);
console.log(`${idade_usuario}`);
