/*

Promises: Evoluação das callbacks, é ma for mais sofisticada de trbalharmos como programaçao assincrona.

A promise é uma callback "gourmet".

Promises sao utilizadas mais e mais prog js, sendo no React (biblioteca js), Angular, Vue.js, Express, Node.js, entre outros.

Promise: Promessa (podemos fazer uma analogia com mundo real): Sempre que "prometemos" algo para alguem existem 2 possibilidades: Cumprir (RESOLVE) ou nao cumprir(REJECT).

Email => Resolve: "ok" - Reject: "Falha ao enviar o email"

Save > Resolve: "Dados salos" - Reject: "Falha ao salvar dados".

*/

const prompt = require("prompt-sync")();

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let deuerro = false;

            if (!deuerro) {
                resolve(); //Promessa ok!
            } else {
                reject(); //foi mau, eu falhei a missao
            }
        }, 5000);
    });
}
// usamos o .the para programa executar açoes que eu quiser quando a promise for Resolve.
//Usamos o .catch para fazer o tratamento da promise, ou seja, como meu programa deve se comportar quando status da promise
enviarEmail("Ola Bluemers ;) ", "avestruzquetesedez@gmail.com")
    .then(function () {
        console.log("Opa, voce fez o que prometeu!");
    })
    .catch(function () {
        console.log("Que pena, dessa vez nao rolou");
    });

    