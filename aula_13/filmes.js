const prompt = require("prompt-sync");

const filme = {
    nome: "click",
    duracao: 107,
    ano: 2006,
    atores: ["Adam Sandler", "Kate Beckinsale", "Christopher Walken"],
};

console.log(filme);
console.log("_______________________________________");
//Object.keys --> imprime todas as chaves (atributos) do meu objeto em forma de lista

console.log(Object.keys(filme));

console.log("_________________________________");

//object.values (pronuncia: velhos) --> imprime (apenas) todos valores do meu objeto em forma de lista;

console.log(Object.values(filme));

console.log("_____________________________________");

//Object.entries --> imprime todas as chaves e todos os valores do meu objeto em forma de lista;

console.log(Object.entries(filme)); //

console.log("______________________________");

//Iterando objetos a partir da lista gerada pelo Object.keys com for "normal";

// props = properties = propriedades por boa pratica utilizar para dizer que estamos percorrendo as propriedades da lista

const props = Object.keys(filme); // props
console.log(props);
console.log("_____________");
for (let i = 0; i < props.length; i++) {
    console.log(filme[props[i]]);
    console.log("______________");
    console.log(filme[props[i]]);
}
console.log("______________________________//__________________________");
// interando com o for of
// similar for (const filme of filmes)

for (const prop of props) {
    console.log(filme[prop]);
}
console.log("//__________________________________________//");
// pegar propriedade e valor

for (const prop in filme) {
    console.log(prop, filme[prop]);
}


