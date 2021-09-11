// Async / Await

//Async: Palavra poe ser usada ao criarmos uma funcao convencional. Qando adicionamos esse identificador na criação desta função nós definimos que ela sera uma FUNCAÇÃO ASSÍNCRONA, ou seja. nos retornara UMA PROMISE

//Await: Essa palavra sera usada com o objetivo de ESPERAR a resolução de uma função assincrona. Se houver uma serie de serie de funções assincronas, o await definira que o codigo so tera sequencia quando a função anterior for resolvida. O await so poderar ser usado com Async Functions (funcções assincronas)

// joinStrings: ira realizar a concatenação de 2 strings. Ela foi criada com  o identificador async, deixando claro que se trata de uma função assincrona.

//A função init() ira realizar a chamada dela, mas com o identificador await. Percebam que nesse caso usamos o metodo .then() apos chamar a função, como fazemos em uma promise.

async function joinStrings(string1, string2) {
    return string1 + "" + string2;
}

async function init() {
    await joinStrings("Blue", "Edtech").then(function (result) {
        console.log(result);
    });
}

init();
