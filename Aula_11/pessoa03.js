let pessoa = {
    nome: "Renato Pordeus Furtado",
    Idade: 17,
    Genero: "Masculino",
};

pessoa.interesses = ["Dinheiro", "Vestibular", "Cinema", "Programação"];

console.log(pessoa);

//Vamos criar uma função anonima chamada bio para o nosso objeto.

pessoa.bio = function () {
    return `Meu nome é ${this.nome}, tenho ${this.Idade} anos, sou do genero é ${this.Genero}, e meus interesses são: ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]}, ${this.interesses[3]}.`;
};

console.log(pessoa.bio());
