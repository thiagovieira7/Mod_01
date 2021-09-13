//concluido

const prompt = require("prompt-sync")();

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
