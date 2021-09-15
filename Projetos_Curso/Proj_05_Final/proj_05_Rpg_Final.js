const prompt = require("prompt-sync")();

// let nome_Pernsonagem = prompt("Por favor insira o nome do personagem: ");

// class Rotina_D1_casa {
//     constructor(acordar, banheiro, cozinha, vestes) {
//         this.acordar = acordar;
//         this.banheiro = banheiro;
//         this.cozinha = cozinha;
//         this.vestes = vestes;
//     }
// }

// class Rotina_D2_casa extends Rotina_D1_casa {
//     constructor(acordar, banheiro, cozinha, vestes) {
//         super("VERIFICAR");
//     }
// }

let acordar = prompt("Voce acordou, deseja levantar ou voltar a dormir? ");
acordar = acordar.toUpperCase();
if (acordar == "LEVANTAR") {
    let depoisAcordar = prompt(
        "O que deseja fazer agora? (higiene pessoal, refeição matinal, trocar de roupa) ",
    );
    depoisAcordar = depoisAcordar.toUpperCase();
    if (depoisAcordar == "HIGIENE PESSOAL" || depoisAcordar == "HIGIENE") {
        console.log("Escovando Dentes e iniciando banho...");
    } else if (
        depoisAcordar == "REFEIÇÃO MATINAL" ||
        depoisAcordar == "REFEIÇÃO" ||
        depoisAcordar == "REFEICAO" ||
        depoisAcordar == "REFEICAO MATINAL"
    ) {
        console.log("Iniciando refeição matinal...");
    } else if (
        depoisAcordar == "TROCAR DE ROUPA" ||
        depoisAcordar == "TROCAR" ||
        depoisAcordar == "ROUPA" ||
        depoisAcordar == "TROCAR ROUPA"
    ) {
        console.log("Escolhendo roupas e se trocando....");
    } else {
        console.log("opção invalida...");
    }
} else if (
    acordar == "VOLTAR A DORMIR" ||
    acordar == "VOLTAR DORMIR" ||
    acordar == "DORMIR"
) {
    console.log("Dormindo novamente...");
} else {
    console.log("opção invalida...");
}

let inicioDia = prompt(
    "Agora que esta pronto, devemos iniciar o dia... (escolha se deseja ir para o TRABAHO ou FICAR EM CASA) ",
);
inicioDia = inicioDia.toUpperCase();
if (inicioDia == "TRABALHO" || inicioDia == "IR PARA O TRABALHO") {
    let veiculoLocomocao = prompt(
        "Escolha a forma de deslocamento para o trabalho (UBER, ONIBUS, CAMINHANDO",
    );
    veiculoLocomocao = veiculoLocomocao.toUpperCase();
    if (veiculoLocomocao == "UBER") {
        console.log("Aguarde o motorista chegar...");
        sleep(3000);
        console.log("Entrando no veiculo e aguarde a chegada a empresa...");
        sleep(7000);
        console.log("Voce chegou a empresa...");
    } else if (veiculoLocomocao == "ONIBUS") {
        console.log("atravessando a rua até o ponto de onibus...");
        sleep(2000);
        console.log("Aguarde a chegada do onibus...");
        sleep(5000);
        console.log("entrando no onibus, e seguindo para empresa...");
        sleep(120000);
        console.log("Voce chegou a empresa...");
    } else if (veiculoLocomocao == "CAMINHANDO") {
        console.log("Comece a andar senão vai se atrasar...");
        sleep(15000);
        console.log("voce chegou atrasado na empresa...");
    }
}

// let rotina1 = new Rotina_D1_casa(depoisAcordar);
