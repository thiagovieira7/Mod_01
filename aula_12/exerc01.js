//const prompt = require("prompt-sync")();

let filme1 = {
    nome: "filme A",
    duracao: "180 min",
    ano: 2010,
    diretor: "Joaozinho 1",
    ator: "q ano review 2020",
    dados: function () {
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, com a participação de ${ator}`;
    },
};

let filme2 = {
    nome: "filme B",
    duracao: "110 min",
    ano: 2010,
    diretor: "Joaozinho 2",
    ator: "q ano review 2021",
    dados: function () {
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, com a participação de ${ator}`;
    },
};

let filme3 = {
    nome: "filme C",
    duracao: "120 min",
    ano: 2010,
    diretor: "Joaozinho 3",
    ator: "q ano review 2019",
    dados: function () {
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, com a participação de ${ator}`;
    },
};

let filme4 = {
    nome: "filme D",
    duracao: "180 min",
    ano: 2010,
    diretor: "Joaozinho 4",
    ator: "q ano review 2018",
    dados: function () {
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, com a participação de ${ator}`;
    },
};
let filme5 = {
    nome: "filme E",
    duracao: "150 min",
    ano: 2010,
    diretor: "Joaozinho 5",
    ator: "q ano review 2017",
    dados: function () {
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, com a participação de ${ator}`;
    },
};

console.log(filme1.dados());
console.log(filme2.dados());
console.log(filme3.dados());
console.log(filme4.dados());
console.log(filme5.dados());

let catalogo = [filme1, filme2, filme3, filme4, filme5];

for (let i of catalogo) {
    console.log(i.dados());
}
