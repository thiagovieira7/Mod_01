// Programas sincromos --> Programas que fizemos ate aula 17 que sao executados e trazem resultado na hora

// programas Assinconos --: As coisas  nao acontecem no mesmo momento

//1° passo: Precisamos criar uma função para reponsavel pela simulação do envio do email.

//função setTimeout serve para realizar acoes depois de determinado tempo.
//Precisamos passar uma FUNCAO ANONIMA como parametro () do setTimeout.

function enviarEmail(corpo, para) {
    setTimeout(function () {
        console.log(`

            Para: ${para}
            ------------------------------------------------------------
            ${corpo}
            ------------------------------------------------------------

            De: Thiago Vieira

        `); // template literals
    }, 4000); // 4000 ms = 4s de espera
}

console.log("\nInicio do envio do email");

enviarEmail(
    "Parabéns voce ganhou um cupom de desconto  de R$0.90 na loja WWDW",
    "contato@aliens.com",
);

console.log("Seu email foi enviado");
console.log("Email recebido pelo contato");
