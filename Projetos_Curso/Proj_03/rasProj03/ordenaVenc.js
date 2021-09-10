/* Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. */

pessoas.sort(function (a, b) {
    return a.numTir - b.numTir; //    ordena de forma crescente
});
