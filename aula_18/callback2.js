// Callback 2.0 posso atribuir quantos parametros precisar

function enviarEmail(corpo, para, callback) {
    setTimeout(function () {
        console.log(`

            Para: ${para}
            ------------------------------------------------------------
            ${corpo}
            ------------------------------------------------------------

            De: Thiago Vieira

        `); // template literals
        //parametros de maneira dinamica
        // para cada parametro passado na callback, o mesmo tambem precisa ser passado na function

        callback("ok", 1, "5s", "Thiago...");
    }, 5000); // 5000 ms = 5s de espera
}

console.log("\nInicio do envio do email");

enviarEmail(
    "Parabéns voce ganhou um cupom de desconto  de R$0.90 na loja WWDW",
    "contato@aliens.com",

    function (status, amount, time, name) {
        console.log(`
        De: ${name}
        Status: ${status}
        ----------------------
        Contatos: ${amount}
        ----------------------
        Tempo de espera: ${time}

        `);
        console.log("Tudo certo...");
    },
);
