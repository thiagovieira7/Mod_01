//Herança --> Classe (class) mãe ao extender, a classe filha herda (recebe) tudo que é da mãe.(ex "Class Cachorro" (classe filha), estende (extends) da "class Animal" (classe mãe) atributos e metodos)

class Animal {
    // todos animais terao esse atributo
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }
    // posso perssonalizar um metodo vindo da classe mae... (abaixo)
    ChecarEstoque() {
        console.log("Temos 40 cachorros a venda em promoção...");
    }
}

// palavra reservada extends indica minha classe cachorro esta recebendo TUDO (atributos e metodos) da class Animal;

//Nome da classe mãe SEMPRE vem após a palavra extends

class Cachorro extends Animal {
    constructor(nome, idade, preco, raca, peso) {
        super(nome, idade, preco); //preciso OBRIGATORIAMENTE colocar o SUPER para que meu programa entenda que eu quero REUTILIZAR esses atributos da classe mãe.
        this.raca = raca;
        this.peso = peso;
    }

    //posso criar metodos exclusivos (unicos) para a classe filha
    Latir() {
        console.log("Au!");
    }

    ChecarEstoque() {
        return 10;
    }
}

let dog = new Cachorro("Heineken", 2, 499, "lhasa", 3);
console.log(dog);

//mostrar todo conteudo do objeto
console.log(dog);
dog.Latir();
console.log(dog.ChecarEstoque());
