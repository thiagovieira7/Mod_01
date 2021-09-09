// Callback deve ser passado por um parametro da funcao enviarEmail.

function enviarEmail(corpo, para, callback) {
    setTimeout(function () {
        console.log(`

            Para: ${para}
            ------------------------------------------------------------
            ${corpo}
            ------------------------------------------------------------

            De: Thiago Vieira

        `); // template literals
        callback();
    }, 5000); // 5000 ms = 5s de espera
}

console.log("\nInicio do envio do email");

// esse caso o callback so sera executado apos termos certeza que o email foi enviado e esta tudo ok.

enviarEmail(
    "Parabéns voce ganhou um cupom de desconto  de R$0.90 na loja WWDW",
    "contato@aliens.com",

    function () {
        console.log("Seu email foi enviado");
        console.log("Email recebido pelo contato");
    },
);
