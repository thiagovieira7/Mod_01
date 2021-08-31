const prompt = require("prompt-sync")();

let lista = ["Diego", 20, "C8", "Blue"];
let aluno = {
    nome: { primeiro: "Diego", sobrenome: "carravetta" },
    idade: 20,
    turma: "C8",
    curso: "Blue",
};

console.log(lista[0]); // busca posicao

console.log(aluno.nome.primeiro); // exibe um valor dentro de outro valor
console.log(aluno.idade); //exibe valor idade

console.log();
aluno.cidade = "Curitiba";

console.log(aluno); // exibe valor inteiro armaxenado

aluno.interesses = ["anime", "videogame", "cinema", "serie"];

delete aluno.cidade; // apaga um valor

console.log(aluno);

console.log();

console.log(aluno.interesses[2]);

// revisao return --> qdo crio função e quero que apresente o resultado no final para retornar uma coisa, nao lista, apos executar todos comandos ela me devolve o que foi feito
function soma() {
    // criando função anonima dentro de objeto
    let valor1 = +prompt("digite um numero: ");
    let valor2 = +prompt("digite outro numero "); // +prompt converte num/string
    let soma = valor1 + valor2;
    return soma; // retorna qualquer coisa para ser usado em algo
}

let v1 = soma(); // armazenado valor retornado pela função
let v2 = soma();

console.log(v1); //exibi o valor armazenado anteriormente
console.log(v2);

console.log();

/* aluno.dados = funcion(){
    return `O aluno ${this.nome.primeiro}, tem ${this.idade} anos, esta matriculado na turma ${this.turma}, do curso ${this.curso}`
}

console.log(aluno.dados("Gabriel")) */
