// ele interrompe se a condição ocorrer e passa para a proxima interação no laço de repetção

/* for (let i = 1; i < 10; i++) {
    if (i === 3) {
        continue;
    }
}
console.log("O numero atual é " + i); // errei na posição do console.log
 */

//Continue: Com este comando, é possível iniciar a próxima repetição do loop. A instrução continue interrompe uma iteração (no laço de repetição), se uma condição específica ocorrer, e continua com a próxima iteração no laço de repetição.

for (let i = 1; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log("O número atual é: " + i);
}
