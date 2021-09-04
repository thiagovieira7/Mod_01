/* simulador de dados de um cassino: A ideia é simularmos o funcionamento de dados de um cassino clandestino: criaremos diferentes tipos de dados e de forma aleatoria mostraremos os valores tirados em cada dado. */

//Exemplo: O Celular
//classe --> Fabrica de Objetos
//Atributos -->Caracteristicas dos meus objetos (Marca, peso, cor, tamanho, ...)
//Metodos --> "Ações" que meu objeto pode criar (Enviar mensagem, fazer chamada, abrir facebook,...)

//Dica do Pai: Como boa pratica, as classe iniciam com letra MAIUSCULA...

class Dado {
    // dentro do metodo constructor coloco atributos do meu objeto
    // metodo construtor = "Molde/forma"
    //faces = numero de dados de cada dado
    constructor(faces) {
        this.faces = faces; // isso é uma auto referencia
    }
    // função em js para gerar um numero aleatorio

    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //criando metodo Rolar() para gerar um numero aleatorio entre 1 e numero de faces que meu dado tiver.

    Rolar() {
        console.log(
            "Resultado do dado " + this.GetRandomIntInclusive(1, this.faces),
        );
    }
}

// Instanciando (criando) os nossos dados

// A partir desse momento meu dado existe e pode ser manipulado
let d6 = new Dado(6); // cria um dado de 6 faces;
let d12 = new Dado(12);
let d100 = new Dado(100);

d6.Rolar(); //Rolar é o metodo do objeto dado
d12.Rolar();
d100.Rolar();
