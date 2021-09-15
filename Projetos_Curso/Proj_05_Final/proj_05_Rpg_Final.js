const prompt = require("prompt-sync")();

class Refeicao {
    // Todos os animais terão esses atributos.

    constructor(refeicao1) {
        this.refeicao1 = refeicao1;
    }
}

class RefeicaoEsuco extends Refeicao {
    constructor(refeicao1, suco) {
        super(refeicao1);
        this.suco = suco;
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

let continuar = true;
while (continuar) {
    let invalida = true;
    while (invalida) {
        let acordar = prompt(
            " * Voce acordou, deseja LEVANTAR ou VOLTAR A DORMIR?  - ",
        );
        acordar = acordar.toUpperCase();
        if (acordar == "LEVANTAR") {
            invalida = false;
        } else if (
            acordar == "VOLTAR A DORMIR" ||
            acordar == "VOLTAR DORMIR" ||
            acordar == "DORMIR"
        ) {
            console.log(
                " * Dormindo novamente...(SONECA 30 minutos corra para o trabalho quando acordar... kkkk)",
            );
            sleep(10000);
        } else {
            console.log(" ** Opção invalida...");
        }
    }

    invalida = true;
    while (invalida) {
        let depoisAcordar = prompt(
            " * O que deseja fazer agora? (higiene pessoal, refeição matinal, trocar de roupa)  - ",
        );

        depoisAcordar = depoisAcordar.toUpperCase();
        if (depoisAcordar == "HIGIENE PESSOAL" || depoisAcordar == "HIGIENE") {
            console.log(" * Escovando Dentes e iniciando banho...");
            invalida = false;
        } else if (
            depoisAcordar == "REFEIÇÃO MATINAL" ||
            depoisAcordar == "REFEIÇÃO" ||
            depoisAcordar == "REFEICAO" ||
            depoisAcordar == "REFEICAO MATINAL"
        ) {
            console.log(" * Iniciando refeição matinal...");
            sleep(15000);
            invalida = false;
        } else if (
            depoisAcordar == "TROCAR DE ROUPA" ||
            depoisAcordar == "TROCAR" ||
            depoisAcordar == "ROUPA" ||
            depoisAcordar == "TROCAR ROUPA"
        ) {
            console.log(" * Escolhendo roupas e se trocando....");
            sleep(10000);
            invalida = false;
        } else {
            console.log(" ** Opção invalida...");
        }
    }
    invalida = true;
    let inicioDia = null;
    let ficaEmCasa = false;
    while (invalida) {
        inicioDia = prompt(
            " * Agora que esta pronto, devemos iniciar o dia... (escolha se deseja ir para o TRABALHO ou FICAR EM CASA)  - ",
        );
        inicioDia = inicioDia.toUpperCase();
        if (
            inicioDia == "FICAR EM CASA" ||
            inicioDia == "FICAR CASA" ||
            inicioDia == "CASA"
        ) {
            console.log(
                " * Lembre-se: Falta não justificada pode deixar sua moral negativa com seus superiores no trabalho....",
            );
            ficaEmCasa = true;
            invalida = false;
        } else if (
            inicioDia == "TRABALHO" ||
            inicioDia == "IR PARA O TRABALHO"
        ) {
            invalida = false;
        } else {
            console.log(" ** Opção invalida...");
        }
    }
    if (!ficaEmCasa) {
        invalida = true;
        while (invalida) {
            let veiculoLocomocao = prompt(
                " * Escolha a forma de deslocamento para o trabalho (UBER, ONIBUS, CAMINHANDO)  - ",
            );
            veiculoLocomocao = veiculoLocomocao.toUpperCase();
            if (veiculoLocomocao == "UBER") {
                console.log(" * Aguarde o motorista chegar...");
                sleep(3000);
                console.log(
                    " * Entrando no veiculo e aguarde a chegada a empresa...",
                );
                sleep(7000);
                console.log(" * Voce chegou a empresa...");
                invalida = false;
            } else if (veiculoLocomocao == "ONIBUS") {
                console.log(" * Atravessando a rua até o ponto de onibus...");
                sleep(2000);
                console.log(" * Aguarde a chegada do onibus...");
                sleep(5000);
                console.log(
                    " * Entrando no onibus, e seguindo para empresa...",
                );
                sleep(2000);
                console.log(" * Voce chegou a empresa...");
                invalida = false;
            } else if (veiculoLocomocao == "CAMINHANDO") {
                console.log(" * Comece a andar senão vai se atrasar...");
                sleep(15000);
                console.log(" * Voce chegou atrasado na empresa...");
                invalida = false;
            } else {
                console.log(" ** Opção invalida...");
            }
        }

        invalida = true;
        while (invalida) {
            let trabalho = prompt(
                " * Estamos em vosso local de trabalho, o que deseja fazer? (VERIFICAR EMAILS, VERIFICAR VIDEOS PRODUTORAS, VERIFICAR ENCAIXES COMERCIAIS, FALAR COM CHEFES, FALAR COM MASTER)  - ",
            );
            trabalho = trabalho.toUpperCase();
            if (
                trabalho == "VERIFICAR EMAILS" ||
                trabalho == "EMAILS" ||
                trabalho == "VERIFICAR OS E-MAILS" ||
                trabalho == " VERIFICAR E-MAILS" ||
                trabalho == "E-MAILS"
            ) {
                console.log(" * Verificando e-mails....");
                sleep(5000);
                function enviarEmail(corpo, para) {
                    setTimeout(function () {
                        console.log(`
          
                  Para: ${para}
                  -----------------------------------------------------------------------
                  ${corpo}
                  -----------------------------------------------------------------------
                  De: Operacoes_Comerciais
          
                   `);
                    }, 4000);
                }

                console.log(" * Início do envio do email!");

                enviarEmail(
                    "Precido dos encaixes comerciais urgente",
                    "cliente.kg@gggelo.com",
                );

                console.log(" * Email enviado");
                console.log(" * Confirmado...");
                invalida = false;
            } else if (
                trabalho == "VERIFICAR VIDEOS DAS PRODUTORAS" ||
                trabalho == "VERIFICAR VIDEOS" ||
                trabalho == "VERIFICAR VIDEOS PRODUTORAS" ||
                trabalho == "VERIFICAR VIDEOS" ||
                trabalho == "VIDEOS PRODUTORAS"
            ) {
                invalida = false;
                console.log(" * Todos videos estão corretos...");
            } else if (
                trabalho == "VERIFICAR ENCAIXES" ||
                trabalho == "ENCAIXES COMERCIAIS"
            ) {
                console.log(" * Todos comerciais estão no tempo correto...");
                invalida = false;
            } else if (
                trabalho == "FALAR COM CHEFE" ||
                trabalho == "FALAR CHEFE" ||
                trabalho == "CHEFE"
            ) {
                console.log(
                    " * Hoje não é seu dia de sorte, voce levou uma bronca...",
                );
                invalida = false;
            } else if (
                trabalho == "FALAR COM MASTER" ||
                trabalho == "FALAR MASTER" ||
                trabalho == "MASTER"
            ) {
                console.log(" * Tudo funcionando normal");
                invalida = false;
            } else {
                console.log(" ** Opção invalida...");
            }
        }
        console.log(" * Agora no fim de expediente.");
    }

    console.log(" * O dia está acabando.");
    sleep(4000);

    let vajantar = prompt(" * Voce deve jantar, Ok?  - ");
    vajantar = vajantar.toUpperCase();
    if (vajantar == "OK" || vajantar == "SIM") {
        let comida = new Refeicao(prompt(" * Informe o que deseja comer:  - "));
        let comidaComsuco = new RefeicaoEsuco(
            prompt(" * Informe complemento refeição:  - "),
            prompt(" * Informe o suco:  - "),
        );
        console.log(comida);
        console.log(comidaComsuco);
    } else {
        console.log(" * Voce vai ficar anemico...");
    }

    invalida = true;
    while (invalida) {
        let dormir = prompt(" * Está tarde, irá dormir?  - ");
        dormir = dormir.toUpperCase();
        if (dormir == "OK" || dormir == "SIM") {
            console.log(" * Dormindo ...");
            invalida = false;
            sleep(4000);
        } else {
            console.log(" * Você procura algo para fazer ...");
            sleep(4000);
        }
    }

    let novoDia = prompt(" * Deseja iniciar mais um dia ? - ");
    novoDia = novoDia.toUpperCase();
    if (novoDia == "OK" || novoDia == "SIM") {
        continuar = true;
    } else {
        continuar = false;
    }
}
